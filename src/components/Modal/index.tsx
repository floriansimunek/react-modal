import Button from '@components/Button';
import Dialog from '@components/Dialog';
import { ModalProps } from '@types';
import { useState } from 'react';
import './index.scss';

const Modal: React.FC<ModalProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
