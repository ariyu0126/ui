import Title from './Title';
import Text from './Text';

const Typography = ({
  // typography group
  className,
  // title
  level = 1,
  title,
  titleColor,
  titleClass,
  // text
  text,
  weight,
  textClass,
  textColor,
  ptag,
  size,
  ellipsis,
  ...rest
}) => {
  return (
    <div className={`typography--layout ${className}`}>
      {title && (
        <Title
          level={level}
          title={title}
          titleClass={titleClass}
          titleColor={titleColor}
          {...rest}
        />
      )}
      {text && (
        <Text
          weight={weight}
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
