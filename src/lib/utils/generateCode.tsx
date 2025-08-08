export const generateCode = (
  componentName: string,
  props: Record<string, any> = {},
  children: string = ''
) => {
  const selfClosingComponents = ['Typography', 'Checkbox', 'Input', 'Radio'];

  const { children: _ignored, ...rest } = props;

  const propStrings = Object.entries(rest)
    .filter(([_, value]) => value !== null && value !== undefined && value !== '')
    .map(([key, value]) => {
      if (typeof value === 'string') {
        return `${key}="${value}"`;
      }
      return `${key}={${JSON.stringify(value)}}`;
    });

  if (selfClosingComponents.includes(componentName)) {
    return `<${componentName} ${propStrings.join(' ')} />`;
  }

  return `<${componentName} ${propStrings.join(' ')}>
  ${children}
</${componentName}>`;
};
