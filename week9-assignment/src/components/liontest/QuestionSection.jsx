import React, { useState } from 'react';
import { styled } from 'styled-components';
import Result from './Result';

const QuestionSection = ({questionData, answerData, setAnswerData}) => {
    const [currentID, setCurrentID] = useState(0);
    const [btnActive, setBtnActive] = useState("");
    const toggleActive = (e) => {
      setBtnActive(e.target.id);
    }
    const toNextBtnHandling = () => {
      setAnswerData(answerData => [...answerData, 
        {
          "id": currentID,
          "answer": Number(btnActive)
        }]);
      setCurrentID(currentID+1);
      console.log(answerData);
    }

    return (
        <>
        {currentID === (questionData.length - 1)? 
        <Result answerData={answerData}/> :
        <QuestionSec>
          { questionData &&
          <>
            <Title>{questionData[currentID].title}</Title>
            <AnswerSection>{
              questionData[currentID].answerList && questionData[currentID].answerList.map((ask, i) => (
                <Answer id={`${ask.aid}`} clicked={btnActive===`${ask.aid}`? true : false} onClick={toggleActive}>{ask.content}</Answer>
              ))
              }
            </AnswerSection>
            <NextButton onClick={toNextBtnHandling}>다음</NextButton>
          </>
          }
        </QuestionSec>
        }
        </>
    );
};

export default QuestionSection;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  font-size: 20px;
  background-color: #ffa43c;
  color: white;
  cursor: pointer;
  width: 40%;
  border-radius: 20px;
`;

const QuestionSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #424242;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 15px;
`;

const Answer = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.clicked ? "#ffa43c" : "beige")};
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;