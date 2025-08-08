'use client';

import Radio from './Radio';
import RadioGroup from './RadioGroup';

const _Radio = Radio as typeof Radio & { Group: typeof RadioGroup };
(_Radio as any).Group = RadioGroup;

export default _Radio;
