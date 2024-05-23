import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  title?: string
  text?: string
  visible: boolean
  children?: ReactNode
}

function Modal({ title, text, visible, children }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const modalElem = modalRef.current
    if (!modalElem) {
      return
    }
    if (visible) {
      modalElem.showModal()
    } else {
      modalElem.close()
    }
  }, [visible])

  return (
    <dialog
      ref={modalRef}
      id="modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        {children}
        {text && !children && <p className="py-4">{text}</p>}
      </div>
    </dialog>
  )
}

export default Modal
