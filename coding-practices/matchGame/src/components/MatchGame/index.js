import {Component} from 'react'

import TabItem from '../TabItem'
import Header from '../Header'
import ImageItem from '../ImageItem'
// import ThumbNail from '../ThumbNail'

import './index.css'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

class MatchGame extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
    clickedImagesList: [],
    time: 60,
  }

  componentDidMount() {
    this.timerId = setInterval(this.statusChange, 1000)
  }

  statusChange = () => {
    const {time} = this.state
    if (time !== 0) {
      this.setState(prevState => ({time: prevState.time - 1}))
    }
  }

  onClickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  clickImage = () => {
    const {clickedImagesList} = this.state
    const {imagesList} = this.props
    const clickedImage = clickedImagesList === imagesList.imagesUrl

    this.setState({clickedImagesList: clickedImage})
    console.log(imagesList.thumbnailUrl)
  }

  renderImagesList = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props
    const filteredImages = imagesList.filter(
      eachImageDetails => eachImageDetails.category === activeTabId,
    )
    return (
      <>
        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              onClickTabItem={this.onClickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>
        <ul className="image-list-container">
          {filteredImages.map(eachImage => (
            <ImageItem
              key={eachImage.id}
              imageDetails={eachImage}
              onClickImage={this.clickImage}
            />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {imagesList, time} = this.props
    const newImgUrl =
      imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl

    return (
      <div className="app-container">
        <Header timer={time} />
        <div className="container">
          <img src={newImgUrl} alt="thumbnail" className="thumbnail" />
          {this.renderImagesList()}
        </div>
      </div>
    )
  }
}
export default MatchGame
