import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Components/Navbar"
import MainContent from "./Components/MainContent"
import Footer from "./Components/Footer"
import Bar from "./Components/Bar"
import MissedTasks from "./Components/MissedTasks"
import Schedule from "./Components/Schedule"

const listOfTasks = [
{	
	name: "Breakfast",
	startTime: 8,
	endTime: 9,
	completed: false
},
{
	name: "Meditation",
	startTime: 10,
	endTime: 11,
	completed: false
},
{
	name: "Lunch",
	startTime: 12,
	endTime: 13,
	completed: false
},
{
	name: "Homework",
	startTime: 14,
	endTime: 17,
	completed: false
},
{ 
	name: "Dinner",
	startTime: 18,
	endTime: 19,
	completed: false
},
{
	name: "Sleep",
	startTime:23,
	endTime: 7,
	completed: false
}
]

function App()
{
	return (
		<div>
		<Navbar />
		<Bar task={listOfTasks} />
		<Schedule tasks={listOfTasks} />
		<MissedTasks />
		<Footer />
		</div>
		)
	}

	export default App