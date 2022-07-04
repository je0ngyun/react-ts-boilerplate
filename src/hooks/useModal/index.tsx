import React, { useState, cloneElement } from 'react'
import { Modal } from 'antd'
import Deffered from '@utils/deferred'

const useModal = () => {
  const showModal = async (content: React.ReactElement) => {
    const deferred = new Deffered()
    const modal = Modal.success({
      title: false,
      transitionName: 'slidedown',
      centered: true,
      getContainer: '#root',
    })
    const onConfirm = () => {
      modal.destroy()
      deferred.resolve(true)
    }
    const onCancel = () => {
      modal.destroy()
      deferred.resolve(false)
    }
    modal.update({
      content: cloneElement(content, {
        onConfirm,
        onCancel,
      }),
    })
    return await deferred
  }
  return [showModal]
}

export default useModal
