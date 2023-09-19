export type ButtonProps = {
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type DialogProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export type ModalProps = {
  children?: React.ReactNode;
};
