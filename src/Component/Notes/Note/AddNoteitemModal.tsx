import React, { useState } from "react";
import { NoteDefinitions as def } from "../../../Definitions";
import { localization } from "../../../Localization";
import { Modal } from "../../Modal";

type TProps = {
  showModal: boolean;
  closeModal: () => void;
  onItemAdd: (item: def.TNoteItem) => void;
};

export const AddNoteItemModalItem: React.FunctionComponent<TProps> = (
  props: TProps
): JSX.Element => {
  const [noteItem, setNoteItem] = useState<def.TNoteItem>({
    id: new Date().getTime().toString(),
    content: "",
    checked: false,
    severity: def.ENoteSeverity.NORMAL
  });

  const updateNoteItem = (newData: any): void => {
    setNoteItem((current) => ({
      ...current,
      ...newData
    }));
  };

  const onSubmit = (): void => {
    props.onItemAdd?.(noteItem);
  };

  const getModalBody = (): JSX.Element => {
    return (
      <form onSubmit={onSubmit}>
        <input
          name="note-content"
          type="text"
          placeholder="Add item..."
          value={noteItem.content}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            updateNoteItem({
              content: event.target.value
            })
          }
        />
        <br />
      </form>
    );
  };

  return (
    <Modal
      showModal={props.showModal}
      modalTitle={localization.addNoteItemModalTitle}
      primaryLabel={localization.add}
      secondaryLabel={localization.discard}
      primaryAction={onSubmit}
      secondaryAction={props.closeModal}
    >
      {getModalBody()}
    </Modal>
  );
};
