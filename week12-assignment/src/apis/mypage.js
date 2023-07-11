import axios from "axios"

export const getMyPage = async() => {
    const access = localStorage.getItem('access');
    const result = await axios.get('http://front.cau-likelion.org/mypage', {
        headers: {
            Authorization: access,
        }
    });
    return result.data;
}