import axios from "axios";

export const getNewRefreshToken = async() => {
    const accessToken = localStorage.getItem('access');
    const refreshToken = localStorage.getItem('refresh');
    try{
        const result = await axios.post('http://front.cau-likelion.org/refresh', 
        {
            refreshToken,
        },
        {
            headers: {
                Authorization: accessToken,
            }
        })
        return result.data;
    }catch(error){
        if(error.response.status === 401) {
            alert('토큰 만료! 다시 로그인해주세요.');
            window.location.replace('/');
        }
    }
}