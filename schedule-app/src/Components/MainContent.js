import React from "react"
import {Segment} from "semantic-ui-react"
import {Button, Progress} from 'semantic-ui-react'

import ProgressExampleIndicating from "./Bar"


function MainContent(props) {
	let task = props.task
	return (
		<Segment>
			{task.name}
			<br />
			<Button onClick={ProgressExampleIndicating.increment}>I did it</Button>
			//  //ProgressExampleIndicating.render()
		</Segment>
		)
}

export default MainContent;