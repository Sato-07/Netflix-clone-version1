import MuiModal from "@mui/material/Modal"
import { useState } from "react"
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Movie } from "../typing"


function Modal() {

    const [showModal, setShowModal] = useRecoilState(modalState)
    const [movie, setMovie] = useState<Movie | null>(null)

    const handleClose = () => {
        setShowModal(false)
    } 
  return (
    <MuiModal open={showModal} onClose={handleClose}>
        <>
        <button
        onClick={handleClose}
        className="modalButton absolute right-5 top-5 !z-40"

        />
        </>
    </MuiModal>
  )
}

export default Modal



