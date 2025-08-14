import type React from 'react';
import { cx } from '@/lib/cx';

type TitleProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  title?: React.ReactNode;
  titleClass?: string;
  children?: React.ReactNode;
  titleColor?: string;
  titleWeight?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Title = ({
  level = 1,
  title,
  titleClass = '',
  children,
  titleColor = '',
  titleWeight = '',
  ...rest
}: TitleProps) => {
  const Tag: React.ElementType = `h${level}` as React.ElementType;
  const content = title || children;

  return content ? (
    <Tag
      className={cx(
        `title__${level}`,
        titleClass,
        titleColor && `color__${titleColor}`,
        titleWeight && `title__${titleWeight}`,
      )}
      {...rest}
    >
      {content}
    </Tag>
  ) : null;
};

export default Title;
