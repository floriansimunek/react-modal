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
        {children}
      </div>
    </div>
  );
};

export default Dialog;
