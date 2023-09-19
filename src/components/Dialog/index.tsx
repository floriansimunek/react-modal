import { DialogProps } from '@types';
import './index.scss';

const Dialog: React.FC<DialogProps> = ({ children, onClick }) => {
  return (
    <div
      className="modal--container"
      onClick={(e) => e.currentTarget === e.target && onClick && onClick()}
    >
      <div className="modal--dialog">{children}</div>
    </div>
  );
};

export default Dialog;
