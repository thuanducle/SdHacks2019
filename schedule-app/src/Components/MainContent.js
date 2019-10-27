import React from "react"


function MainContent(props) {
	let task = props.task
	return (
		<Segment>
			{task.name}
		</Segment>
		)
}

export default MainContent;