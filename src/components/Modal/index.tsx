import Button from '@components/Button';
import Dialog from '@components/Dialog';
import { ModalProps } from '@types';

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="modal">
      <Dialog>{children}</Dialog>
      <Button />
    </div>
  );
};

export default Modal;
