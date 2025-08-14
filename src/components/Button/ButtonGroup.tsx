import { cx } from '@/lib/cx';

type ButtonGroupProps = {
  alignGroup?: 'left' | 'center' | 'right' | 'down' | 'full';
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const ButtonGroup = ({ alignGroup = 'left', children, ...rest }: ButtonGroupProps) => {
  return (
    <div className={cx('button__group', `button__group-${alignGroup}`)} {...rest}>
      {children}
    </div>
  );
};

export default ButtonGroup;
