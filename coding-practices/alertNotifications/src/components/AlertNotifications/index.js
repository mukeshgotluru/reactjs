// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import './index.css'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="post-container">
    <h1 className="heading">Alert Notifications</h1>
    <Notification>
      <div className="card">
        <div className="icon-container">
          <AiFillCheckCircle className="success-icon" />
        </div>
        <div>
          <h1 className="success-heading">Success</h1>
          <p className="description">
            You can access all the files in the folder
          </p>
        </div>
        <GrFormClose />
      </div>
    </Notification>
    <Notification>
      <div className="card">
        <div className="icon-container">
          <RiErrorWarningFill className="error-icon" />
        </div>
        <div>
          <h1 className="error-heading">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
        <GrFormClose />
      </div>
    </Notification>
    <Notification>
      <div className="card">
        <div className="icon-container">
          <MdWarning className="warning-icon" />
        </div>
        <div>
          <h1 className="warning-heading">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
        <GrFormClose />
      </div>
    </Notification>
    <Notification>
      <div className="card">
        <div className="icon-container">
          <MdInfo className="info-icon" />
        </div>
        <div>
          <h1 className="info-heading">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
        <GrFormClose />
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
