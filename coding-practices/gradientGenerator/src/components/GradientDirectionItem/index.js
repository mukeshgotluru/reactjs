// Write your code here

import {CustomButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, clickActiveButton} = props
  const {displayText, value} = directionDetails
  const onClickActiveButton = () => {
    clickActiveButton(value)
  }

  return (
    <ListItem>
      <CustomButton type="button" onClick={onClickActiveButton}>
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
