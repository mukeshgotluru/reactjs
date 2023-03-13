import {Component} from 'react'

import {ImageElement} from './styledComponents'
import Language from '../Language'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  onClickChangeLanguage = id => {
    this.setState({activeLanguageId: id})
  }

  getSelectedGreeting = () => {
    const {activeLanguageId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(
        eachEle => eachEle.id === activeLanguageId,
      )
    ]
    return <ImageElement src={imageUrl} alt={imageAltText} />
  }

  render() {
    const {activeLanguageId} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="button-container">
          {languageGreetingsList.map(eachGreet => (
            <Language
              className="button"
              key={eachGreet.id}
              isActive={activeLanguageId === eachGreet.id}
              LanguageData={eachGreet}
              onClickChangeLanguage={this.onClickChangeLanguage}
            />
          ))}
        </ul>

        {this.getSelectedGreeting()}
      </div>
    )
  }
}

export default Greetings
