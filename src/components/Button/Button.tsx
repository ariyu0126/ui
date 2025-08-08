import IconSearch from '/public/search-alt-2-svgrepo-com.svg';
import IconNewWindow from '/public/arrow-up-right-svgrepo-com.svg';
import IconDownLoad from '/public/arrow-narrow-bottom-alignment-svgrepo-com.svg';

const icons = {
  search: <IconSearch />,
  new: <IconNewWindow />,
  down: <IconDownLoad />,
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
  const buttonClass = `button__default size--${size} align--${align} color--${color} style--${style} ${className} ${disabled ? 'is-disabled' : ''}`;

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick} {...rest}>
      {icon && icon !== 'null' && <span className="button__icon">{icons[icon as keyof typeof icons]}</span>}
      <span className="button__text">{children}</span>
    </button>
  );
};

export default Button;
