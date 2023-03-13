import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicBlock = props => {
  const {MusicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li className="music-list-container-block">
      <img src={imageUrl} alt="track" className="image-element" />
      <div className="each-block">
        <div className="tract-details-container">
          <p className="tract-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>

        <div className="time-delete-container">
          <p className="duration">{duration}</p>
          <button
            type="button"
            data-testid="delete"
            className="del-btn"
            onClick={onDeleteTrack}
          >
            <AiOutlineDelete size={20} testid="delete" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicBlock
