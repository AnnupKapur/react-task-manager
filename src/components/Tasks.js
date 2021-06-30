import EachTask from "./EachTask"

const Tasks = ({tasks, onDelete, onBell}) => {

	return (
		<div className="allTasks">
			{tasks.map((task) => (
				<EachTask key={task.id} task={task} onDelete={onDelete}  onBell={onBell} />
			))}
		</div>
	)
}

export default Tasks