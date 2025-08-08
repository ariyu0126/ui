'use client';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

const _Button = Button as typeof Button & { Group: typeof ButtonGroup };
(_Button as any).Group = ButtonGroup;

export default _Button;
