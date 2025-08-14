import type React from 'react';
import { cx } from '@/lib/cx';

type FlexProps = {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  wrap?: string;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Flex = ({
  direction = '',
  justify = '',
  align = '',
  gap = '',
  wrap = '',
  className = '',
  children,
  ...rest
}: FlexProps) => {
  const flaxClassName = cx(
    'flex',
    direction && `flex--direction-${direction}`,
    justify && `flex--justify-${justify}`,
    align && `flex--align-${align}`,
    gap && `flex--gap-${gap}`,
    wrap && `flex--wrap-${wrap}`,
    className,
  );
  return (
    <div className={flaxClassName} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
