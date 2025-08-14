import { cx } from '@/lib/cx';

import Title from './Title';
import Text from './Text';

type TypographyProps = {
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  title?: React.ReactNode;
  titleColor?: string;
  titleClass?: string;
  titleWeight?: string;
  text?: React.ReactNode;
  textWeight?: string;
  /** alias for textWeight to support existing usages */
  weight?: string;
  textClass?: string;
  textColor?: string;
  ptag?: boolean;
  size?: string;
  ellipsis?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Typography = ({
  // typography group
  className = '',
  // title
  level = 1,
  title,
  titleColor,
  titleClass,
  titleWeight,
  // text
  text,
  textWeight,
  weight,
  textClass,
  textColor,
  ptag,
  size,
  ellipsis,
  ...rest
}: TypographyProps) => {
  return (
    <div className={cx('typography--layout', className)}>
      {title && (
        <Title
          level={level}
          title={title}
          titleClass={titleClass}
          titleColor={titleColor}
          titleWeight={titleWeight}
          {...rest}
        />
      )}
      {text && (
        <Text
          textWeight={textWeight ?? weight}
          text={text}
          textClass={textClass}
          textColor={textColor}
          ptag={ptag}
          size={size}
          ellipsis={ellipsis}
          {...rest}
        />
      )}
    </div>
  );
};

Typography.Title = Title;
Typography.Text = Text;

export default Typography;
