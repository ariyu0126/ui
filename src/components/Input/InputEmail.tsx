import Input from './Input';
import type { ComponentProps } from 'react';

type BaseInputProps = ComponentProps<typeof Input>;
const InputEmail = (props: Omit<BaseInputProps, 'type'>) => {
  return <Input {...props} type="email" />;
};

export default InputEmail;
