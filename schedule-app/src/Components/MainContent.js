import React from "react"
import {Segment} from "semantic-ui-react"

function MainContent(props) {
	let task = props.task
	return (
		<Segment>
			{task.name}
		</Segment>
		)
}

export default MainContent;