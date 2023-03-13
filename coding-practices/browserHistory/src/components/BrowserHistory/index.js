import './index.css'

const BrowserHistory = props => {
  const {eachHistory, onDeleteHistory} = props
  const {timeAccessed, logoUrl, id, title, domainUrl} = eachHistory
  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="item-container">
      <p className="date">{timeAccessed}</p>
      <div className="logo-container">
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <div className="title-container">
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <div className="delete-container">
        <button
          className="button"
          type="button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
