import Button from '@components/Button';
import Dialog from '@components/Dialog';
import { ModalProps } from '@types';
import { useEffect, useState } from 'react';
import './index.scss';

const Modal: React.FC<ModalProps> = ({ children, title, onOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    isOpen ? onOpen && onOpen() : onClose && isClicked && onClose();
  }, [isOpen, isClicked, onOpen, onClose]);

  return (
    <div className="modal" data-testid="modal" data-rm-is-open={isOpen}>
      <Dialog onClick={() => setIsOpen(false)} title={title}>
        {children}
      </Dialog>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsClicked(true);
        }}
      />
    </div>
  );
};

export default Modal;
