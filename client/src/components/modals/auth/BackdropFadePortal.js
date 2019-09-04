import { useEffect } from "react";
import { createPortal } from "react-dom";

export default ({ isOpened }) => {
  const modalBackdropEl = document.createElement("div");
  modalBackdropEl.className = "modal-backdrop fade show";

  useEffect(() => {
    if (isOpened) {
      document.body.appendChild(modalBackdropEl);
    } else {
      document.body.removeChild(document.body.lastChild);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened]);

  return createPortal(modalBackdropEl.current, document.body);
};
