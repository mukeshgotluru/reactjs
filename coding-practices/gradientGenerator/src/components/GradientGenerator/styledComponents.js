// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.direct},
    ${props => props.colorInputOne},
    ${props => props.colorInputTwo}
  );
  height: 100vh;
`

export const MainHeading = styled.h1`
  color: #ffffff;
`
export const ButtonContainer = styled.ul`
  display: flex;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const Paragraph = styled.p`
  color: #ffffff;
  text-align: center;
`
export const InputElement = styled.input`
 height:120px
 width:250px;
 border:none;
 margin-top:10px;
`
export const LabelElement = styled.label`
  color: #ffffff;
`
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const GenerateButton = styled.button`
  height: 40px;
  width: 120px;
  background-color: #0070c1;
  border: 1px solid #0070c1;
  border-radius: 4px;
  color: #ffffff;
  margin-top: 25px;
  align-self: center;
`
