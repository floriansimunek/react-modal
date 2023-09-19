import CloseIcon from '@components/CloseIcon';
import DialogButton from '@components/DialogButton';
import { DialogProps } from '@types';
import './index.scss';

const Dialog: React.FC<DialogProps> = ({ children, onClick, title }) => {
  return (
    <div
      className="modal__container"
      data-testid="modal__container"
      onClick={(e) => e.currentTarget === e.target && onClick && onClick()}
    >
      <div className="modal__dialog" data-testid="modal__dialog">
        <div className="modal__dialog--header">
          <p className="modal__dialog--header-title">{title}</p>
          <CloseIcon onClick={onClick} />
        </div>
        <div className="modal__dialog--body">{children}</div>
        <div className="modal__dialog--footer">
          <DialogButton onClick={onClick}>Close</DialogButton>
          <DialogButton type={'color'}>Action</DialogButton>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
