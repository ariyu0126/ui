import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

// 타입 안전한 서브컴포넌트 연결
const _Checkbox = Checkbox as typeof Checkbox & { Group: typeof CheckboxGroup };
(_Checkbox as any).Group = CheckboxGroup;

export default _Checkbox;
