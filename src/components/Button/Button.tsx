import { cx } from '../../lib/cx';
import { Icon } from '../Icon/index';

const icons = {
  search: <Icon.search />,
  new: <Icon.newWindow />,
  down: <Icon.down />,
} as const;

type IconKey = keyof typeof icons | 'null' | undefined;

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  style?: 'fill' | 'line' | 'text';
  icon?: IconKey;
  align?: 'left' | 'center' | 'right';
  color?: 'white' | 'dark' | 'point';
  disabled?: boolean;
  children?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  size = 'md',
  style = 'fill',
  icon,
  align = 'left',
  color = 'white',
  disabled = false,
  children = '버튼',
  onClick,
  className = '',
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(
        'button__default',
        `size--${size}`,
        `align--${align}`,
        `color--${color}`,
        `style--${style}`,
        'no-drag',
        className,
        disabled && 'is-disabled',
      )}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && icon !== 'null' && <span className="icon">{icons[icon as keyof typeof icons]}</span>}
      <span className="button__text">{children}</span>
    </button>
  );
};

export default Button;
