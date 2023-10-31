import { StyledButton } from './Button.styles';

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText = '' }: ButtonProps) => {
  return <StyledButton>{buttonText}</StyledButton>;
};

export default Button;
