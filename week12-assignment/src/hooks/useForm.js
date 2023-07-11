import { useState } from "react"

export const useForm = () => {
    const [value, setValue] = useState();
    const [isValid, setIsValid] = useState(false);
    const [validText, setValidText] = useState('');

    const onChange = (e) => {
        if(e.target.placeholder === '아이디') {
            const regex = /[a-z]+[a-z0-9]+/; //영문 소문자로 시작하는 영문 소문자 + 숫자 조합
            if(regex.test(e.target.value)) {
                setIsValid(true);
                setValidText('');
                setValue(e.target.value);
            }
            else { setValidText("아이디는 영문 소문자로 시작하는 영문 소문자 및 숫자 조합이어야 합니다."); }
        }
        else if(e.target.placeholder === '이름'){
            const regex = /[ㄱ-힣]+/; //한글만 입력가능
            if(regex.test(e.target.value)) {
                setIsValid(true);
                setValidText('');
                setValue(e.target.value);
            }
            else { setValidText("이름은 한글만 입력가능합니다."); }
        }
        else if(e.target.placeholder === '나이'){
            const regex = /[0-999]+/;
            if(regex.test(e.target.value)) {
                setIsValid(true);
                setValidText('');
                setValue(e.target.value);
            }
            else { setValidText("정확한 나이를 숫자로 입력해주세요."); }
        }
        else {
            setIsValid(true);
            setValue(e.target.value);
        }
    };

    return [value, onChange, isValid, validText];
}
