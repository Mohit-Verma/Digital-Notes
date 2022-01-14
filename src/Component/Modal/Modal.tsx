import React from "react";
import { ModalDefinitions as def } from "../../Definitions";
import { localization } from "../../Localization";

type TModalMemo = React.MemoExoticComponent<(any) => JSX.Element>;

export const Modal: TModalMemo = React.memo(
  (props: def.TProps): JSX.Element => {
    return (
      <div>
        <div className="modal-header">
          <label className="modal-title"> {props.modalTitle} </label>
          <label className="close-modal"> {localization.close.value} </label>
        </div>

        <div className="modal-body">{props.children}</div>

        <div className="modal-footer">
          <div className="modal-secondary-handle">
            <button onClick={props.secondaryAction}>
              {props.secondaryLabel}
            </button>
          </div>
          <div className="modal-primary-handle">
            <button onClick={props.primaryAction}>{props.primaryLabel}</button>
          </div>
        </div>
      </div>
    );
  }
);
