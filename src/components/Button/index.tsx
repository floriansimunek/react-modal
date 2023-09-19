import { ButtonProps } from '@types';

const Button: React.FC<ButtonProps> = ({ children = 'Open modal' }) => {
  return <button type="button">{children}</button>;
};

export default Button;
