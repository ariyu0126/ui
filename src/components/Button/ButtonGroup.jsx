const ButtonGroup = ({ alignGroup, children, ...rest }) => {
  return (
    <div className={`button__group button__group-${alignGroup}`} {...rest}>
      {children}
    </div>
  );
};

export default ButtonGroup;
