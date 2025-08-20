import Link from 'next/link';
import { cx } from '../../lib/cx';
import { Icon } from '../Icon';

const icons = {
  search: <Icon.search />,
  new: <Icon.newWindow />,
  down: <Icon.down />,
} as const;

type IconKey = keyof typeof icons | 'null' | undefined;

type BaseProps = {
  size?: 'sm' | 'md' | 'lg';
  style?: 'fill' | 'line' | 'text';
  icon?: IconKey;
  align?: 'left' | 'center' | 'right';
  color?: 'white' | 'dark' | 'point';
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ButtonLink = ({
  size = 'md',
  style = 'fill',
  icon,
  align = 'left',
  color = 'white',
  children = '링크',
  className = '',
  href = '#',
  target = '_self',
  ...rest
}: BaseProps) => {
  return (
    <Link
      href={href}
      className={cx(
        'button__default',
        `size--${size}`,
        `align--${align}`,
        `color--${color}`,
        `style--${style}`,
        'no-drag',
        className,
      )}
      target={target}
      {...rest}
    >
      {icon && icon !== 'null' && <span className="icon">{icons[icon as keyof typeof icons]}</span>}
      <span className="button__text">{children}</span>
    </Link>
  );
};

export default ButtonLink;
