// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      console.log(item)
      return <ProjectTimelineCard projectDetails={item} key={item.id} />
    }
    return <CourseTimelineCard courseDetails={item} key={item.id} />
  }
  return (
    <div className="time-line-container">
      <div className="responsive-container">
        <h1 className="heading">
          MY JOURNEY OF <br />
          <span className="sub-heading">CCBP 4.0</span>
        </h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
