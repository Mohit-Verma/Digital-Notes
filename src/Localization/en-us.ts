type TMessages = Record<
  string,
  {
    id: string;
    value: string;
  }
>;

const messages: TMessages = {
  delete: {
    id: "delete",
    value: "Delete"
  },
  close: {
    id: "close",
    value: "Close"
  },
  add: {
    id: "add",
    value: "Add"
  },
  discard: {
    id: "discard",
    value: "Discard"
  },
  addNoteItemModalTitle: {
    id: "addNoteItemModalTitle",
    value: "Add Item"
  },
  addItemsToNote: {
    id: "addItemsToNote",
    value: "Add items to you notes"
  }
};

export default messages;
