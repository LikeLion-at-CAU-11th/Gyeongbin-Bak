import React, { useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';

const Result = ({answerData}) => {
    const [isReady, setisReady] = useState(false);
    const [resultData, setResultData] = useState();

    const resultBtnClick = async() => {
        console.log(answerData);
        const answerJson = JSON.stringify({"answer": answerData});
        console.log(answerJson);
        axios.post(
            'https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api/liontest/result',
            answerJson,
            {
                headers : {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(function(response){
            console.log(response.data.data);
            setResultData(response.data.data);
        })
        .catch(function(error){
            console.log(error);
        });
        setisReady(true);
    }
    
    return (
        <Dom>
            {!isReady ? 
            <Button onClick={resultBtnClick}>결과 보기</Button> : 
            <>
            { resultData && 
                <>
                <Total>{`점수 ${resultData.result} / ${answerData.length}`}</Total>
                <Incorrect>틀린문제</Incorrect>
                {
                    resultData.incorrect.map((data, i) => (
                        <>
                        <Question>{data.title}</Question>
                        <Answer>{`정답 : ${data.answer}`}</Answer>
                        </>
                    ))
                }
                </>}
            </>
            }
        </Dom>
    );
};

export default Result;

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Total = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Question = styled.div`
  width: 100%;
`;

const Answer = styled.div`
  font-size: 15px;
`;

const Incorrect = styled.div`
  width: 100%;
  font-size: 26px;
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