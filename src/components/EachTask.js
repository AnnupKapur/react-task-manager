import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const EachTask = ({task, onDelete, onBell}) => {

	const bellHigh = <FontAwesomeIcon icon={faBell} />
	const priorityBell = task.priority ? {color:"#00F0C5", transform:'scale(2)'} : {color:"hsla(360, 0%, 50%, 1)"}
	const priorityTask = task.priority ? {backgroundColor:"hsla(360, 0%, 25%, 1)", opacity:"1"} : {}

	return (
		<div className="task" style={priorityTask} onDoubleClick={() => onBell(task.id)}>

			<div className="bell" style={priorityBell} onClick={() => onBell(task.id)}>
				{bellHigh}
			</div>

			<div className="text">
				<div className="taskTitle">{task.text}</div>
				<div className="taskDue">{task.due}</div>
			</div>

			<div className="deleteBtn" onClick={() => onDelete(task.id)}><FontAwesomeIcon icon={faTrashAlt} /></div>
			
		</div>
	)
}

export default EachTask