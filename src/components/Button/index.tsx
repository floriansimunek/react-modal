import { ButtonProps } from '@types';

const Button: React.FC<ButtonProps> = ({
  children = 'Open modal',
  onClick,
}) => {
  return (
    <button type="button" data-testid="modal--button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
