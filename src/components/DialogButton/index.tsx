import { DialogButtonProps } from '@types';
import './index.scss';

const DialogButton: React.FC<DialogButtonProps> = ({
  children = 'Open modal',
  onClick,
  type = 'white',
}) => {
  return (
    <button
      type="button"
      className="modal__dialog__button"
      data-testid="modal__dialog__button"
      data-rm-button-type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DialogButton;
