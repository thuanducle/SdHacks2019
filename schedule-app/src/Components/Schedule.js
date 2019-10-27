import React from "react"
import { List, Header, Segment } from 'semantic-ui-react'

function Schedule(props){
	let tasks = props.tasks

	let RenderList = () => (
		tasks.map((task) => (
			<List.Item>
			{task.name}
			</List.Item>
			)
			
			)
			)


			return (
			<Segment>
			<Header id="schedule">Schedule</Header>
			<List bulleted>
			<RenderList />
			</List>
			</Segment>
			)
		}

		export default Schedule;