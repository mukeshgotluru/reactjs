import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImage} = props
  const {imageUrl, id, category} = imageDetails
  const onClickImages = () => {
    onClickImage(id)
  }
  return (
    <li className="image-list">
      <img
        src={imageUrl}
        alt={category}
        className="image"
        onClick={onClickImages}
      />
    </li>
  )
}

export default ImageItem
