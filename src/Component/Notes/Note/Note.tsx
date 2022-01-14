import React, { useState } from "react";
import { NoteDefinitions as def } from "../../../Definitions";
import { localization } from "../../../Localization";
import { AddNoteItemModalItem } from "./AddNoteitemModal";
import * as config from "./Note.config";

export const Note: React.FunctionComponent<def.TProps> = (
  props: def.TProps
): JSX.Element => {
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const onItemAdd = (item: def.TNoteItem): void => {
    const { items, updateItems } = props;
    const selectiveNoteItems = items.filter(
      (noteItem) => noteItem.id !== item.id
    );
    updateItems([...selectiveNoteItems, item]);
  };

  const onItemRemove = (item: def.TNoteItem): void => {
    const { items, updateItems } = props;
    updateItems(items.filter((noteItem) => noteItem.id !== item.id));
  };

  const renderItems = (items: def.TNoteItem[]): JSX.Element | null => {
    if (items && items.length) {
      return (
        <ul>
          {items.map((noteItem: def.TNoteItem) => {
            const { severity, content, checked } = noteItem;
            const itemColor = config.SeverityColorMap[severity];
            return (
              <li>
                <div>
                  <input
                    name="item-checked"
                    type="checkbox"
                    checked={checked}
                  />
                  <label style={{ color: itemColor }}> {content} </label>
                  <button onClick={() => onItemRemove(noteItem)}>
                    {localization.delete.value}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
    return <h2> {localization.addItemsToNote.value} </h2>;
  };

  return (
    <div>
      <h3> {props.title} </h3>
      {renderItems(props.items)}
    </div>
  );
};
