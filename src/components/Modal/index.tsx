import Button from '@components/Button';
import Dialog from '@components/Dialog';
import { ModalProps } from '@types';
import { useState } from 'react';

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="modal" data-rm-is-open={isOpen}>
      <Dialog>{children}</Dialog>
      <Button onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default Modal;
