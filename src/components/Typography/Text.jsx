const Text = ({weight = '400', text, children, textClass, ptag = false, textColor='', size='default', ...rest}) => {
    const Tag = ptag ? 'p' : 'div';
    const content = text || children;
    return (
        content ? (
            <Tag className={`text__${weight} ${textClass} color__${textColor} size__${size}`} {...rest}>
                {content}
            </Tag>
        ) : null
    );
}

export default Text;