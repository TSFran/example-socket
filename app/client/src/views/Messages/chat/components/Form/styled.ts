import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1fc8db;
  background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const BoxMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  max-width: 400px;
  background: white;
  padding: 40px;
  border-radius: 4px;
`;

export const Input = styled.input`
  min-width: 180px;
  height: 40px;
  border: none;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  border: 2px solid rgb(179, 179, 179);
  border-radius: 4px;
  margin: 5px;
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  min-height: 40px;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 25px;
  margin: 5px;
`;