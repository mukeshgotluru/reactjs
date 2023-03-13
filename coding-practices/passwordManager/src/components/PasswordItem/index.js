/* eslint-disable react/no-unknown-property */
import "./index.css";

const PasswordItem = (props) => {
  const { passwordDetails } = props;
  const {
    id,
    website,
    username,
    initialClassName,
    password,
    isChecked,
  } = passwordDetails;
  const initial = username ? username[0].toUpperCase() : "";

  const onDeletePassword = () => {
    const { deletePassword } = props;
    deletePassword(id);
  };

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-password-container">
            <p className="website">{website}</p>
            <p className="username">{username}</p>
          </div>
          {!isChecked && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
              className="stars-image"
              alt="stars"
            />
          )}
          {isChecked && <p className="website">{password}</p>}
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeletePassword}
          testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  );
};

export default PasswordItem;
