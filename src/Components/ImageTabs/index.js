import './index.css'

const ImageTabs = props => {
  const {eachTab, clickTheImage, ActivetabId} = props
  const {tabId, displayText} = eachTab

  const clicktab = () => {
    clickTheImage(tabId)
  }
  const activeCSS = ActivetabId ? 'add-style' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-name ${activeCSS}`}
        onClick={clicktab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default ImageTabs
