import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {name, imageUrl} = userDetails

  return (
    <li className="users-list">
      <div className="container">
        <img src={imageUrl} className="avatar" alt="avatar" />
        <h1>{name}</h1>
      </div>
    </li>
  )
}

export default UserProfile
