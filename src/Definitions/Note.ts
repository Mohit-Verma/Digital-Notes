export enum ENoteSeverity {
  NORMAL = "NORMAL",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH"
}

export type TNoteItem = {
  id: string;
  checked: boolean;
  content: string;
  severity: ENoteSeverity;
};

export type TProps = {
  title: string;
  items: Array<TNoteItem>;
  severity: ENoteSeverity;
  updateItems: (noteItems: Array<TNoteItem>) => void;
};
