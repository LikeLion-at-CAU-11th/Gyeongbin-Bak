import React, { useState } from 'react'
import styled from 'styled-components';
import UserCard from './UserCard';
import { PageButton } from './PageButton';

const UserDataSection = ({userData,pageNum}) => {
    const [newPage, setNewPage] = useState(0);
    const [pageColor, setPageColor] = useState([]);
    if (pageNum === 0) {
        return (
            <Dom>{
                userData && userData.map((user, i) => <UserCard key={i} user={user} />)
            }</Dom>
        )
    }
    else {
        const data = userData[newPage];
        const pageArray = [];
        for (let j=0;j<pageNum;j++){
            pageArray.push(j+1);
        }
        return (
            <>
            <Dom>{
                data && data.map((user, i) => <UserCard key={i} user={user} />)
            }</Dom>
            <ButtonWrapper>{
                pageArray && pageArray.map((num) => 
                    <PageButton 
                    key={num} 
                    page={num} 
                    pageColor={pageColor}
                    setNewPage={setNewPage} 
                    setPageColor={setPageColor} />)
            }</ButtonWrapper>
            </>
        )
    }
};

//undefined 방지를 위해 userData&& 사용

export default UserDataSection;

const Dom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  overflow: scroll;
  align-content: flex-start;
  padding: 0 20px;
  min-height: 400px;
  height: 70%;
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: center;
    height: 20%;
`