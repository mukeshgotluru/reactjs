import {Component} from 'react'

import {
  AppContainer,
  MainHeading,
  ButtonContainer,
  FormContainer,
  Paragraph,
  InputElement,
  InputContainer,
  LabelContainer,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeButton: gradientDirectionsList[0].value,
    colorInputOne: '#8ae323',
    colorInputTwo: '#014f7b',
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  clickActiveButton = value => {
    this.setState({activeButton: value})
  }

  onChangeColorOne = event => {
    this.setState({colorInputOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorInputTwo: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {colorInputOne, colorInputTwo, activeButton} = this.state
    this.setState({
      colorOne: colorInputOne,
      colorTwo: colorInputTwo,
      direction: activeButton,
    })
  }

  render() {
    const {
      activeButton,
      colorInputTwo,
      colorInputOne,
      colorOne,
      colorTwo,
      direction,
    } = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        direct={direction}
        colorInputOne={colorOne}
        colorInputTwo={colorTwo}
      >
        <MainHeading>Generate a CSS color Gradient</MainHeading>
        <FormContainer onSubmit={this.onSubmitForm}>
          <Paragraph>Choose Direction</Paragraph>
          <ButtonContainer>
            {gradientDirectionsList.map(eachGradient => (
              <GradientDirectionItem
                key={eachGradient.directionId}
                directionDetails={eachGradient}
                clickActiveButton={this.clickActiveButton}
                isActive={activeButton === gradientDirectionsList.value}
                activeButton={activeButton}
              />
            ))}
          </ButtonContainer>
          <Paragraph>Pick the colors</Paragraph>
          <InputContainer>
            <LabelContainer>
              <Paragraph>{colorInputOne}</Paragraph>
              <InputElement
                type="color"
                id="colorOne"
                value={colorInputOne}
                onChange={this.onChangeColorOne}
              />
            </LabelContainer>
            <LabelContainer>
              <Paragraph>{colorInputTwo}</Paragraph>
              <InputElement
                type="color"
                id="colorTwo"
                value={colorInputTwo}
                onChange={this.onChangeColorTwo}
              />
            </LabelContainer>
          </InputContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
