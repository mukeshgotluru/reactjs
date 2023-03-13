import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 15px;
  padding: 10px;
  height: 40px;
  width: 100px;
  font-family: 'Roboto';
  border: 2px solid #db1c48;
  cursor: pointer;
  color: ${props => (props.active ? '#ffffff' : '#db1c48')};
  background-color: ${props => (props.active ? '#db1c48' : '#ffffff')};
`
