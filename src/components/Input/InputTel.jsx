import Input from './Input';

const InputTel = (props) => {
    // const validateTel = (val) => {
    //     const telRegex = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
    //     if (!telRegex.test(val)) {
    //         return '전화번호 형식이 올바르지 않습니다.';
    //     }
    //     return true;
    // }
    return <Input {...props} type="tel" />
}

export default InputTel;