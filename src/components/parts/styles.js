import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 96%;
  margin: 1rem auto;

`
export const LogInputsBox = styled.div`
  border:solid 1px #dbd8d8;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: -4px 0px 15px -4px #888;

`
export const LowPriorityCell = styled.div`
  background-color: green;
  color:#fff;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  padding: 4px 8px;
`
export const ModeratePriorityCell = styled.div`
  background-color: #ffe600;
  color:#333;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  padding: 5px 8px;
`
export const HighPriorityCell = styled.div`
  background-color: red;
  color:#fff;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  padding: 4px 8px;
`