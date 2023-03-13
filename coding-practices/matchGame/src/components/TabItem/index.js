import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTabItem} = props
  const {displayText, tabId} = tabDetails

  const onClickTabId = () => {
    onClickTabItem(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
