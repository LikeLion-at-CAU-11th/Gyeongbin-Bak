import React, { useState } from 'react'
import { Form, Input, Inputs, Title, Wrapper } from '../components/Common'
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../apis/login';

export const Home = () => {
    const [id,setID] = useState('');
    const [pw,setPW] = useState('');
    const router = useNavigate();
    const onChangeID = (e) => {setID(e.target.value)};
    const onChangePW = (e) => {setPW(e.target.value)};
    const onClick = async() => {
        const result = await login(id,pw);
        const {accessToken, refreshToken} = result;
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        router('/mypage');
    }
  return (
    <Wrapper>
        <Title>로그인하기</Title>
        <Form>
            <Inputs>
                <Input placeholder='아이디' value={id} onChange={onChangeID} />
                <Input placeholder='패스워드' type='password' value={pw} onChange={onChangePW} />
            </Inputs>
            <Button onClick={onClick}>Login</Button>
        </Form>
        <CustomLink to="/signup">회원가입하기</CustomLink>
    </Wrapper>
  )
}

const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 10px;
`;
const CustomLink = styled(Link)`
    margin-top: 20px;
    color: black;
    text-decoration: none;
    &:visited{
        color: black;
        text-decoration: none;
    };
`
