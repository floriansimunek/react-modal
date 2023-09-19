export type ButtonProps = {
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type DialogButtonProps = {
  children?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'white' | 'color';
};

export type DialogProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  title?: string;
};

export type ModalProps = {
  children?: React.ReactNode;
  title?: string;
  onOpen?: () => void;
  onClose?: () => void;
  onCreate?: () => void;
};

export type CloseIconProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
