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
  textClass?: string;
  textColor?: string;
  ptag?: boolean;
  size?: string;
  ellipsis?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Typography = ({
  // typography group
  className,
  // title
  level = 1,
  title,
  titleColor,
  titleClass,
  titleWeight,
  // text
  text,
  textWeight,
  textClass,
  textColor,
  ptag,
  size,
  ellipsis,
  ...rest
}: TypographyProps) => {
  return (
    <div className={`typography--layout ${className}`}>
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
          textWeight={textWeight}
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
