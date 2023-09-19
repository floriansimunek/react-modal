import Button from '@components/Button';
import CloseIcon from '@components/CloseIcon';
import { DialogProps } from '@types';
import './index.scss';

const Dialog: React.FC<DialogProps> = ({ children, onClick }) => {
  return (
    <div
      className="modal__container"
      data-testid="modal__container"
      onClick={(e) => e.currentTarget === e.target && onClick && onClick()}
    >
      <div className="modal__dialog" data-testid="modal__dialog">
        <div className="modal__dialog--header">
          <p className="modal__dialog--header-title">Title</p>
          <CloseIcon onClick={onClick} />
        </div>
        <div className="modal__dialog--body">{children}</div>
        <div className="modal__dialog--footer">
          <Button onClick={onClick}>Close</Button>
          <Button>Action</Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
