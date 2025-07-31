const getValidationMessage = ({
    required=false,
    validate,
    label='입력값',
    min,
    max,
    value,
    type,
}) => {
    // required 체크
    const trimmedValue = (value ?? '').toString().trim();
    if (required && trimmedValue === '') {
        console.log('required');
        return `${label || '입력값'} 은(는) 필수 입력 사항입니다.`;
    }

    // min/max 체크
    const isNumber = !isNaN(Number(trimmedValue)) && trimmedValue !== '';
    if (type === 'number' && !isNumber) {
        console.log('number');
        return '숫자만 입력하세요.'
    }

    if (type === 'number' && isNumber) {
        console.log('number min/max');
        const num = Number(trimmedValue);
        const minNum = !isNaN(Number(min)) ? Number(min) : null;
        const maxNum = !isNaN(Number(max)) ? Number(max) : null;
        if (!isNaN(minNum) && num < minNum) {
            return `최소 ${minNum}자 이상 입력해주세요.`;
        }
        if (!isNaN(maxNum) && num > maxNum) {
            return `최대 ${maxNum}자 이하로 입력해주세요.`;
        }
    }
      
    if (type !== 'number') {
        console.log('number else min/max');
        const minLength = typeof min === 'number' ? Number(min) : undefined;
        const maxLength = typeof max === 'number' ? Number(max) : undefined;
        console.log('minLength', minLength);
        console.log('maxLength', maxLength);
        if (!isNaN(minLength) && trimmedValue.length < minLength) {
            return `최소 ${minLength}자 이상 입력해주세요.`;
        }
        if (!isNaN(maxLength) && trimmedValue.length > maxLength) {
            return `최대 ${maxLength}자 이하로 입력해주세요.`;
        }
    }
    
    // tel 체크
    if (type === 'tel') {
        console.log('tel');
        const telRegex = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
        if (!telRegex.test(value)) {
            return '전화번호 형식이 올바르지 않습니다.';
        }
    }

    // mail 체크
    if (type === 'email') {
        console.log('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return '이메일 형식이 올바르지 않습니다.';
        }
    }

    // validate 체크
    if (validate) {
        console.log('validate');
        const result = validate(value);
        if (result !== true) {
            setErrorMessage(result || '입력값을 확인해주세요.');
            return false;
        }
    }

    return true;
}

export default getValidationMessage;