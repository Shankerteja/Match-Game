import './index.css'

const ImageItem = props => {
  const {eachImage, pressTheImage} = props
  const {id, thumbnailUrl} = eachImage

  const giveImageId = () => {
    pressTheImage(id)
  }

  return (
    <li className="eachimage">
      <button type="button" onClick={giveImageId} className="imagebutton">
        <img src={thumbnailUrl} alt="thumbnail" className="list-image" />
      </button>
    </li>
  )
}
export default ImageItem
