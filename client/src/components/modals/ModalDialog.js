import React from 'react';

export default ({ modalId, modalLabelId, modalTitle, completeButtonLabel, action, children }) => {
  return (
    <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby={modalLabelId} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-base">
          <div className="modal-header">
            <h5 className="modal-title" id={modalLabelId}>{modalTitle}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action={action} method="post">
              {children}
              <div className="modal-buttons">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                <button type="submit" className="btn btn-secondary">{completeButtonLabel}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
