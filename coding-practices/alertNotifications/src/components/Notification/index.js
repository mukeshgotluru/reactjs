// Write your code here
import './index.css'

const Notification = props => {
  const {children} = props
  return <div className="card-container">{children}</div>
}

export default Notification
