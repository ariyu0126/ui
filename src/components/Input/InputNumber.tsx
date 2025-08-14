import Input from './Input';
import type { ComponentProps } from 'react';

type BaseInputProps = ComponentProps<typeof Input>;
const InputNumber = (props: Omit<BaseInputProps, 'type'>) => {
  return <Input {...props} type="number" />;
};

export default InputNumber;
