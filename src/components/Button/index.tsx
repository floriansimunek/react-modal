import { ButtonProps } from '@types';
import './index.scss';

const Button: React.FC<ButtonProps> = ({
  children = 'Open modal',
  onClick,
}) => {
  return (
    <button
      type="button"
      className="modal--button"
      data-testid="modal--button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
