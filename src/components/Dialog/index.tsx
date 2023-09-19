import { DialogProps } from '@types';
import './index.scss';

const Dialog: React.FC<DialogProps> = ({ children }) => {
  return (
    <div className="modal--container">
      <div className="modal--dialog">{children}</div>
    </div>
  );
};

export default Dialog;
