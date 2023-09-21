/* TYPES */
export type {
  ButtonProps,
  DialogButtonProps,
  DialogProps,
  ModalProps,
  CloseIconProps,
} from '@types';

/* COMPONENTS */
export { default as Button } from '@components/Button';
export { default as CloseIcon } from '@components/CloseIcon';
export { default as Dialog } from '@components/Dialog';
export { default as DialogButton } from '@components/DialogButton';

import Modal from '@components/Modal';
export default Modal;

/* STYLES */
import '@components/Button/index.scss';
import '@components/Dialog/index.scss';
import '@components/DialogButton/index.scss';
import '@components/Modal/index.scss';
import './index.css';
