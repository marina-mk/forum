/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default ({ isOpened }) => {
  const didMountRef = useRef(false);
  const modalBackdropEl = document.createElement('div');
  modalBackdropEl.className = 'modal-backdrop fade show';

  useEffect(() => {
    if (didMountRef.current) {
      if (isOpened) {
        document.body.appendChild(modalBackdropEl);
      } else {
        document.body.removeChild(document.body.lastChild);
      }
    } else {
      didMountRef.current = true;
    }
  }, [isOpened]);

  return createPortal(modalBackdropEl.current, document.body);
};
