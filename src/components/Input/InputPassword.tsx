'use client';

import Input from './Input';
import type { ComponentProps } from 'react';

type BaseInputProps = ComponentProps<typeof Input>;
const InputPassword = (props: Omit<BaseInputProps, 'type'>) => {
  return <Input {...props} type="password" />;
};

export default InputPassword;
