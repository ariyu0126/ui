'use client';

import { useState } from 'react';
import Input from './Input';

const InputPassword = (props) => {
    return <Input {...props} type="password" />;
};

export default InputPassword;