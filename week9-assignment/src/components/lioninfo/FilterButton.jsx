import React from 'react'
import styled from 'styled-components'
import { getUserPerPage, getUserPerStack, getUserPerGender } from '../../apis/lioninfo'

const FilterButton = ({title,type,limit,setUserData,setPageNum}) => {
  const handleClickButton = async () => {
    // type에 따라 어떤 api를 호출할 건지 결정해주는 함수
    if(type === "page") {
      //page api 호출 및 response
      const response = await getUserPerPage(0);
    //   console.log(response.data.data.length); //28
      const result =[];
      const dataLength = response.data.data.length;
      var numOfPage = Math.ceil(dataLength/limit);
      var offset = 0;

      if (dataLength > limit) {
        //반복문으로 처리해야할듯?
        for (let i=0; i<numOfPage; i++){
            var newArray = [];
            for (let j=0; j<4; j++){
                newArray.push(response.data.data[offset+j]);
            }
            result.push(newArray);
            offset = offset + limit;
        }
        // console.log(result); 
        // console.log(numOfPage); //7
        setUserData(result);
        setPageNum(numOfPage);
      }
      else { 
        setUserData(response.data.data);
        setPageNum(0);
    }
    }
    else if(type === "gender"){
      //gender api 호출 및 response
      //title: LionInfoModal에서 배열에 세팅해준 값.
      const response = await getUserPerGender(title);
      setUserData(response.data.data);
      setPageNum(0);
    }
    else{
      //stack api 호출 및 response
      const response = await getUserPerStack(title);
      setUserData(response.data.data);
      setPageNum(0);
    }

  };

  return (
    <Button onClick={handleClickButton}>{title}</Button>
  )
}

export default FilterButton

const Button = styled.div`
  flex-basis: 13%;
  height: 70px;
  background-color: beige;
  color: gray;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`;