import React, { cloneElement, useCallback, useState } from 'react'
import { Modal } from 'antd'
import Deffered from '@utils/deferred'
import { useRecoilBridgeAcrossReactRoots_UNSTABLE } from 'recoil'
import { QueryClientProvider, useQueryClient } from 'react-query'

interface ShowModalOptions {
  recoil?: boolean
  reactQuery?: boolean
}

interface ModalInstance {
  destroy: () => void
}

const useModal = ({ recoil, reactQuery } = {} as ShowModalOptions) => {
  const [currentModalInstance, setCurrentModalInstance] = useState<
    ModalInstance | undefined
  >()
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE()
  const queryClient = useQueryClient()

  const getLinkedContent = useCallback(
    (
      content: React.ReactElement,
      { recoil, reactQuery } = {} as ShowModalOptions
    ) => {
      if (!recoil && !reactQuery) {
        return <>{content}</>
      }
      if (recoil && reactQuery) {
        return (
          <QueryClientProvider client={queryClient}>
            <RecoilBridge>{content}</RecoilBridge>
          </QueryClientProvider>
        )
      }
      if (reactQuery) {
        return (
          <QueryClientProvider client={queryClient}>
            {content}
          </QueryClientProvider>
        )
      }
      if (recoil) {
        return <RecoilBridge>{content}</RecoilBridge>
      }
    },
    []
  )

  const showModal = async (content: React.ReactElement) => {
    const deferred = new Deffered()

    const modal = Modal.success({
      title: false,
      transitionName: 'slidedown',
      centered: true,
      getContainer: '#root',
    })

    const onConfirm = (resValue: any) => {
      modal.destroy()
      deferred.resolve(resValue)
    }

    const onCancel = (rejValue: any) => {
      modal.destroy()
      deferred.resolve(rejValue)
    }

    const attachedModalMethod = cloneElement(content, {
      onConfirm,
      onCancel,
    })

    const LinkedContent = getLinkedContent(attachedModalMethod, {
      recoil,
      reactQuery,
    })

    modal.update({
      content: LinkedContent,
    })

    return await deferred
  }
  return [showModal]
}

export default useModal
