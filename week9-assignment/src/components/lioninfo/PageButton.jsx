import React from 'react'
import { styled } from 'styled-components';

export const PageButton = ({page, pageColor, setNewPage, setPageColor}) => {
  // const [pageColor, setPageColor] = useState(0);
  const pageColorArray=[];
  const handleClickPageButton = (e) => {
    for (let i=0; i<page; i++){
      pageColorArray.push(false);
    }
    const getId = e.currentTarget.id
    // console.log(getId);
    // console.log(typeof(getId));
    const idNum = getId.slice(11);
    setNewPage(page-1);
    // console.log(idNum);
    pageColorArray[idNum] = true;
    setPageColor([...pageColorArray]);
  }
  return (
    <Button id={`pagebutton-${page-1}`} clicked={pageColor[page-1]} onClick={handleClickPageButton}>{page}</Button>
  )
}

const Button = styled.div`
  margin-right:10px;
  margin-left: 10px;
  color: ${(props) => (props.clicked ? "black" : "gray")};
  font-size: 25px;
  cursor: pointer;
`