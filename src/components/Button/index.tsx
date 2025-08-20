import BaseButton from './Button';
import ButtonLink from './ButtonLink';
import ButtonGroup from './ButtonGroup';

export const Button = Object.assign(BaseButton, {
  Link: ButtonLink,
  Group: ButtonGroup,
});

export default Button;
