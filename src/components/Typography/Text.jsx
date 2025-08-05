const Text = ({
  weight = '400',
  text,
  children,
  textClass,
  ptag = false,
  textColor = '',
  size = 'default',
  ellipsis = '',
  ...rest
}) => {
  const Tag = ptag ? 'p' : 'div';
  const content = text || children;
  return content ? (
    <Tag
      className={`text__${weight}${textClass ? ` ${textClass}` : ''}${textColor ? ` color__${textColor}` : ''}${size ? ` size__${size}` : ''}${ellipsis ? ` ellipsis__${ellipsis}` : ''}`}
      {...rest}
    >
      {content}
    </Tag>
  ) : null;
};

export default Text;
