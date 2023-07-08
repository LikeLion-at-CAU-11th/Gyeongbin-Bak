// api 호출 관련 메소드

import axios from "axios";

export const baseUrl = `https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api`;

export const getQuestions = () => {
    const url = `${baseUrl}/liontest/question`;
    return axios.get(url);
};

export const postAnswer = (jsondata) => {
    const url = `${baseUrl}/liontest/result`;
    return axios.post(url,jsondata);
}