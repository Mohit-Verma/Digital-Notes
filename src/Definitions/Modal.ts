import { ReactNode } from "react";

export type TProps = {
  showModal: boolean;
  modalTitle: string;
  children: ReactNode;
  primaryLabel: string;
  secondaryLabel: string;
  primaryAction: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  secondaryAction: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
