import axios from "axios";

export const login = async(id,pw) => {
    try{
        const result = await axios.post('http://front.cau-likelion.org', {id,pw});
        return result.data.data;
    }catch(error){
        if(error.response.status === 401){
            alert('로그인에 실패하였습니다! 아이디와 비밀번호를 다시 확인해주세요.');
            window.location.replace('/');
        }
    }
}