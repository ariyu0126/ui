const Flex = ({
  direction = '',
  justify = '',
  align = '',
  gap = '',
  wrap = '',
  className = '',
  children,
  ...rest
}) => {
  const flaxClassName = `
      ${direction ? `flex--direction-${direction}` : ''}
      ${justify ? `flex--justify-${justify}` : ''}
      ${align ? `flex--align-${align}` : ''}
      ${gap ? `flex--gap-${gap}` : ''}
      ${wrap ? `flex--wrap-${wrap}` : ''}
      ${className}
    `.trim();
  return (
    <div className={`flex ${flaxClassName}`} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
