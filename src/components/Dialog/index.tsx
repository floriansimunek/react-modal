import { DialogProps } from '@types';
import './index.scss';

const Dialog: React.FC<DialogProps> = ({ children, onClick }) => {
  return (
    <div
      className="modal--container"
      data-testid="modal--container"
      onClick={(e) => e.currentTarget === e.target && onClick && onClick()}
    >
      <div className="modal--dialog" data-testid="modal--dialog">
        {children}
      </div>
    </div>
  );
};

export default Dialog;
