const Btn = ({bgColor, textColor, text, onClick}) => {
	return ( 
		<button style={{backgroundColor:bgColor, color:textColor}} onClick={onClick}>{text}</button>
	)
}

Btn.defaultProps = {
	bgColor:'black',
	textColor:'white',
	text:'No button text'
}

export default Btn