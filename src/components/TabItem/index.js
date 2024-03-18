// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, isActive, changeActiveTab} = props
  const {tabId, displayText} = tabItemDetails

  const tabClicked = () => {
    changeActiveTab(tabId)
  }

  const activetab = isActive ? 'activetab' : ''

  return (
    <li>
      <button
        type="button"
        className={`tabitem-button ${activetab}`}
        onClick={tabClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
