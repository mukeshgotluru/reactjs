import {Button} from './styledComponents'

import './index.css'

const Language = props => {
  const {LanguageData, isActive, onClickChangeLanguage} = props
  const {buttonText, id} = LanguageData

  const onClickButtonElement = () => {
    onClickChangeLanguage(id)
  }

  return (
    <div className="un-order">
      <li className="btn-container">
        <Button type="button" active={isActive} onClick={onClickButtonElement}>
          {buttonText}
        </Button>
      </li>
    </div>
  )
}

export default Language
