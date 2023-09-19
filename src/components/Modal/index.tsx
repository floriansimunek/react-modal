import Button from '@components/Button';
import Dialog from '@components/Dialog';
import { ModalProps } from '@types';
import { useEffect, useState } from 'react';
import './index.scss';

const Modal: React.FC<ModalProps> = ({ children, title, onOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    isOpen ? onOpen && onOpen() : null;
  }, [isOpen, onOpen]);

  return (
    <div className="modal" data-testid="modal" data-rm-is-open={isOpen}>
      <Dialog onClick={() => setIsOpen(false)} title={title}>
        {children}
      </Dialog>
      <Button onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};

export default Modal;
