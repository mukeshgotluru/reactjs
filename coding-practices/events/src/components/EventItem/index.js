// Write your code here
// user defined event handlers to be in arrow function example @onClickEventTogetStatus

import './index.css'

const EventItem = props => {
  const {eventData, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventData
  const eventImageClassName = isActive ? 'event-img active' : 'event-img'

  const onClickEventToGetStatus = () => {
    setActiveEventId(id)
  }

  return (
    <li className="eventItem-container">
      <button
        className="event-btn"
        type="button"
        onClick={onClickEventToGetStatus}
      >
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="description">{name}</p>
      <p className="place">{location}</p>
    </li>
  )
}

export default EventItem
