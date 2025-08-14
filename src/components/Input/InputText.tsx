import Input from './Input';
import type { ComponentProps } from 'react';

type BaseInputProps = ComponentProps<typeof Input>;
const InputText = (props: Omit<BaseInputProps, 'type'>) => {
  return <Input {...props} type="text" />;
};

export default InputText;
