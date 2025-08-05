const Title = ({ level = 1, title, titleClass = '', children, titleColor = '', ...rest }) => {
  const Tag = `h${level}`;
  const content = title || children;

  return content ? (
    <Tag
      className={`title__${level}${titleClass ? ` ${titleClass}` : ''}${titleColor ? ` color__${titleColor}` : ''}`}
      {...rest}
    >
      {content}
    </Tag>
  ) : null;
};

export default Title;
