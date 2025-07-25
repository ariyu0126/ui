import Input from './Input';

const InputEmail = (props) => {
    const validateEmail = (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
            return '이메일 형식이 올바르지 않습니다.';
        }
        return true;
    }
    return <Input {...props} type="email" validate={validateEmail} />
}

export default InputEmail;