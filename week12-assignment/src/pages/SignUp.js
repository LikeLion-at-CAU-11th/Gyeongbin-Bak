import React from 'react'
import { Input, Inputs, Title, Wrapper } from '../components/Common'
import { useForm } from '../hooks/useForm'
import { styled } from 'styled-components';

export const SignUp = () => {
    const [id, onChangeID] = useForm();
    const [pw, onChangePW] = useForm();
    const [name, onChangeName] = useForm();
    const [age, onChangeAge] = useForm();
  return (
    <Wrapper>
        <Title>회원가입</Title>
        <Inputs>
            <Input placeholder='아이디' value={id} onChange={onChangeID} />
            <Input placeholder='비밀번호' type="password" value={pw} onChange={onChangePW} />
            <Input placeholder='이름' value={name} onChange={onChangeName}/>
            <Input placeholder='나이' value={age} onChange={onChangeAge}/>
        </Inputs>
        <Button>Sign Up</Button>
    </Wrapper>
  )
}

const Button = styled.button`
    background-color: black;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    margin-top: 20px;
`
