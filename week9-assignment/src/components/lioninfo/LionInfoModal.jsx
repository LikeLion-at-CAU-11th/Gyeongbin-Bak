import React from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';
import { useState } from 'react';
import UserDataSection from './UserDataSection';

const LionInfoModal = () => {
  const [userData, setUserData] = useState([]); // 부모에게서는 항상 setUserData만 받으면 됨. 
  
  const category = [
    {
      type: "page",
      title: "All",
    },
    {
      type: "gender",
      title: "male"
    },
    {
      type: "gender",
      title: "female"
    },
    {
      type: "stack",
      title: "frontend"
    },
    {
      type: "stack",
      title: "backend"
    },
    {
      type: "stack",
      title: "design"
    },
    {
      type: "stack",
      title: "pm"
    },
  ];

  const limit = 4; // 표시할 갯수
  const [pageNum, setPageNum] = useState(0); //페이지 수

  return (
    <Dom>
      <Title>🦁 LikeLion 11th 🦁</Title>
      <ButtonDom>
        {
          category.map((c, i) => (
            <FilterButton 
            key={i}
            title={c.title}
            type={c.type}
            limit={limit}
            setUserData={setUserData} 
            setPageNum={setPageNum}
            />
          ))
        }
      </ButtonDom>
      {
        <UserDataSection key={0} userData={userData} pageNum={pageNum} />
      }
    </Dom>
  )
}

//category.map의 c에는 Object 하나하나가 담겨있음.

export default LionInfoModal

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;