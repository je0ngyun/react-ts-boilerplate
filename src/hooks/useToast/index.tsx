import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import Toast from '@components/Toast'

const execOutAnimation = (container: HTMLDivElement | null) =>
  new Promise((res) => {
    setTimeout(res, 220)
    container?.classList.add('slide-down')
  })

const useToast = () => {
  const container = useRef<HTMLDivElement>(null)
  const fireToast = (content: string, delay: number) => {
    const node = document.createElement('div')
    document.body.appendChild(node)
    ReactDOM.render(<Toast content={content} ref={container} />, node)

    setTimeout(async () => {
      await execOutAnimation(container.current)
      ReactDOM.unmountComponentAtNode(node)
      node.remove()
    }, delay)
  }
  return { fireToast }
}

export default useToast
