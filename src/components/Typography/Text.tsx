import type React from 'react';

type TextProps = {
  textWeight?: '100' | '400' | '700' | string;
  text?: React.ReactNode;
  children?: React.ReactNode;
  textClass?: string;
  ptag?: boolean;
  textColor?: string;
  size?: 'default' | 'small' | 'xsmall' | string;
  ellipsis?: string;
} & React.HTMLAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLParagraphElement>;

const Text = ({
  textWeight = '400',
  text,
  children,
  textClass,
  ptag = false,
  textColor = '',
  size = 'default',
  ellipsis = '',
  ...rest
}: TextProps) => {
  const Tag: React.ElementType = (ptag ? 'p' : 'div') as React.ElementType;
  const content = text || children;
  return content ? (
    <Tag
      className={`text__${textWeight}${textClass ? ` ${textClass}` : ''}${textColor ? ` color__${textColor}` : ''}${size ? ` size__${size}` : ''}${ellipsis ? ` ellipsis__${ellipsis}` : ''}`}
      {...rest}
    >
      {content}
    </Tag>
  ) : null;
};

export default Text;
