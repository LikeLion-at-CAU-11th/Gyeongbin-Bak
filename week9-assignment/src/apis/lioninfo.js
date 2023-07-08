// api 호출 관련 메소드
// 외부파일에서 간단하게 함수 하나로만 사용할 수 있도록 만듦.
// 함수 한 개로 분기처리 해서 만드는 것도 가능함!

import axios from "axios";

export const baseUrl = `https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api`;

export const getUserPerPage = (page) => {
    const url = `${baseUrl}/user?page=${page}`;
    return axios.get(url);
};

export const getUserPerGender = (gender) => {
    const url = `${baseUrl}/user?gender=${gender}`;
    return axios.get(url);
};

export const getUserPerStack =(stack) => {
    const url = `${baseUrl}/user?stack=${stack}`;
    return axios.get(url);
};

/*
프론트에서 pagination 처리하기
User data 전체를 받아온 뒤 pagination 하는 방법 : JS slice() 사용.
1. 누를 때마다 slice해서 보내는 방법
2. slice 된 것을 각각의 페이지마다 할당하는 방법. 

[과제 1]
-> 색 표시는 useState로 관리해야함.

*/