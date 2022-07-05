import React, { Children } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { open, close } from '../../slice/modalSlice';
import type { RootState } from '../../store/store';

const ModalPage = () => {
  const isModal = useSelector((state: RootState) => state.modal.isModal);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>여기는 모달 테스트 페이지입니다</h1>
      <button onClick={() => dispatch(open())}>
        버튼을 누르면 모달이 켜지고 꺼져요
      </button>
      {isModal && (
        <React.Fragment>
          <Background onClick={() => dispatch(close())} />
          <ModalBox>버튼 텍스트</ModalBox>
        </React.Fragment>
      )}
    </div>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #555;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
`;

export default ModalPage;
