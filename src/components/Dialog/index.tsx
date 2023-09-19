import { DialogProps } from '@types';

const Dialog: React.FC<DialogProps> = ({ children }) => {
  return <div className="modal--dialog">{children}</div>;
};

export default Dialog;
