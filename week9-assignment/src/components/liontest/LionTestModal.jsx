import React, { useState } from 'react'
import { getQuestions } from '../../apis/liontest';
import { styled } from 'styled-components';
import QuestionSection from './QuestionSection';

const LionTestModal = () => {
  const [questionData, setQuestionData] = useState([]);
  const [isQuestion, setIsQuestion] = useState(false);
  const [answerData, setAnswerData] = useState([]);

  const handleClickButton = async () => {
    const response = await getQuestions();
    //console.log(response);
    setQuestionData(response.data.data);
    setIsQuestion(true)
  }

  return (
    <Dom>
      <Title>🦁멋사인 테스트🦁</Title>
      <ContentBox>
        {!isQuestion ? 
        <Button onClick={handleClickButton}>시작하기</Button> : 
        <QuestionSection
        questionData = {questionData}
        answerData={answerData}
        setAnswerData={setAnswerData} />}
      </ContentBox>
    </Dom>
  )
}

export default LionTestModal;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: gray;
  background-color: beige;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  min-height: 600px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;