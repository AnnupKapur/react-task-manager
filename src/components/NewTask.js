import { useState } from "react"

const NewTask = ({onAdd, lastID}) => {

	const [text, setText] = useState('')
	const [due, setDue] = useState('')
	const [priority, setPriority] = useState(false)
	const onSubmit = (e) => {
		e.preventDefault()
		if(!text)
		{
			alert('Enter your task')
			return
		}

		const id = lastID + 1;

		onAdd({id, text, due, priority})
	}

	return (
		<form className="addTask" onSubmit={onSubmit}>
			
			<div className="formElement">
				<label>Task</label>
				<input className="inText" 
					type="text" placeholder="What is the task ?" 
					value={text} onChange={(e) => setText(e.target.value)} />
			</div>
			
			<div className="formElement">
				<label>Due</label><input className="inText" 
					type="text" placeholder="When is it due ?" 
					value={due} onChange={(e) => setDue(e.target.value)} />
			</div>
			
			<div className="formElement inCheck">
				<label>High Priority</label>
				<input className="inCheck" 
					type="checkbox"
					value={priority} onChange={(e) => setPriority(e.currentTarget.checked)} />
			</div>
			<input type="submit" className="submitButton" value="Set Reminder"></input>
		</form>
	)
}

export default NewTask
