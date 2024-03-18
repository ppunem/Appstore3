// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="card">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="appname">{appName}</p>
    </li>
  )
}

export default AppItem
