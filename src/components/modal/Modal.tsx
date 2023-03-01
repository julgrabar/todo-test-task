import { FC } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

interface IProps {
  children: JSX.Element;
  closeModal: () => void;
}
export const Modal: FC<IProps> = ({ children, closeModal }) => {
  const el = document.getElementById("modal-root")!;
  return createPortal(
    <div className="overlay">
      <div className="content">
        {children}
        <button type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>,
    el
  );
};
