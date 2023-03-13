import './index.css'

const ThumbNail = props => {
  const {thumbNailDetails} = props
  const {thumbnailUrl, category} = thumbNailDetails
  return (
    <>
      <img src={thumbnailUrl} alt={category} className="thumbnail" />
    </>
  )
}

export default ThumbNail
