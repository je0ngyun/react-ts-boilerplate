import React, { useState, cloneElement } from 'react'
import { Modal } from 'antd'

const useModal = (content: React.ReactElement) => {
  const [modalContent, setModalContent] = useState<React.ReactNode>(content)

  const showModal = () => {
    if (content === null) return
    const modal = Modal.success({
      title: false,
      transitionName: 'slidedown',
      centered: true,
    })
    modal.update({
      content: cloneElement(modalContent as React.ReactElement, {
        onConfirm: modal.destroy,
      }),
    })
  }
  return [showModal, setModalContent]
}

export default useModal
