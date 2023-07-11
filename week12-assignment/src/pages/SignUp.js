import React from 'react'
import { Input, Inputs, Title, Wrapper } from '../components/Common'
import { useForm } from '../hooks/useForm'
import { styled } from 'styled-components';
import { signUp } from '../apis/signUp';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const [id, onChangeID, isValidID, validTextID] = useForm();
    const [pw, onChangePW, isValidPW, validTextPW] = useForm();
    const [name, onChangeName, isValidName, validTextName] = useForm();
    const [age, onChangeAge, isValidAge, validTextAge] = useForm();
    
    const router = useNavigate();

    const onClick = async() => {
        // await signUp(id,pw,name,age);
        await signUp(id,pw,name,age);
        router('/');
    }

  return (
    <Wrapper>
        <Title>회원가입</Title>
        <Inputs>
            <Input placeholder='아이디' type="text" value={id} onChange={onChangeID} />
            <Valid>{validTextID}</Valid>
            <Input placeholder='비밀번호' type="password" value={pw} onChange={onChangePW} />
            <Valid>{validTextPW}</Valid>
            <Input placeholder='이름' type="text" value={name} onChange={onChangeName}/>
            <Valid>{validTextName}</Valid>
            <Input placeholder='나이' type="text" value={age} onChange={onChangeAge}/>
            <Valid>{validTextAge}</Valid>
        </Inputs>
        <Button isActive={isValidID&&isValidPW&&isValidName&&isValidAge ? false:true} onClick={onClick}>Sign Up</Button>
    </Wrapper>
  )
}

const Button = styled.button`
    background-color: ${props => props.isActive? 'gray':'black'};
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    margin-top: 20px;
`
const Valid = styled.div`
    color: red;
`
