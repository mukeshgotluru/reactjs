// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.button`
  width: 90px;
  height: 40px;
  color: #334155;
  border: none;
  opacity: ${props => (props.active ? '1' : '0.5 ')};
  font-weight: 600;
  background-color: #ffffff;
  margin-right: 15px;
  border-radius: 5px;
  font-size: 15px;
`
export const ListItem = styled.li`
  list-style-type: none;
`
