import styled from "styled-components";
import { useState } from "react";
import LionInfoModal from "./components/lioninfo/LionInfoModal";
import LionTestModal from "./components/liontest/LionTestModal";

function App() {
  const [modal, setModal] = useState(0);
  return (
    <AppDom>
      <MenuDom>
        <MenuButton clicked={modal===0} onClick={() => setModal(0)}>아기사자 정보</MenuButton>
        <MenuButton clicked={modal===1} onClick={() => setModal(1)}>멋사인 테스트</MenuButton>
      </MenuDom>
      <ModalDom>
        {modal===0? <LionInfoModal /> : <LionTestModal />}
      </ModalDom>
    </AppDom>
  );
}

// 인자 값 넣을 때는 화살표 함수를 사용해야 오류가 나지 않음.
// const handleClick = (num) =>{} 으로 다른 함수를 만들어서 onClick으로 사용해도 됨.
// 이렇게도 사용이 가능하다. 
// {modal === 0 && <LionInfoModal /> }
// {modal === 1 && <LionTestModal /> }

export default App;

const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const MenuButton = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) => (props.clicked ? "orange" : "gray")};
  color: white;
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MenuDom = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;