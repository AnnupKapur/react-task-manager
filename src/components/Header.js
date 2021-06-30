import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"

const Header = ({text, newTask, isOpen}) => {

	return (
		<div className="header">
			<h1>{text}</h1>
			{isOpen===true ? 
				<div className="icon" onClick={newTask}><FontAwesomeIcon icon={faWindowClose} style={{color:'red'}} /></div> : 
				<div className="icon" onClick={newTask}><FontAwesomeIcon icon={faPlusCircle} /></div>}
		</div>
	)
}

Header.defaultProps = {text: 'This is text'}
Header.propTypes = {text: PropTypes.string.isRequired}

export default Header