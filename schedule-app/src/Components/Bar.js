import React, { useState } from 'react'
import { Button, Segment, Progress } from 'semantic-ui-react'


export default function Bar(props) {

  const [taskNumber, setTaskNumber] = useState(0)
  const [percent, setPercent] = useState(20)
  let maxTaskNumber = props.task.length

  let increment = () => {
    setPercent(percent >= 100 ? 100 : percent + 10)
  }
  let decrement = () => {
    setPercent(percent <= 0 ? 0 : percent - 10)
  }
  let didItHandler = () => {
    increment()
    setTaskNumber( (taskNumber + 1)%maxTaskNumber) 
  }
  let didItNotHandler = () => {
    decrement()
    setTaskNumber( (taskNumber + 1)%maxTaskNumber) 
  }


  let task = props.task[taskNumber]

  return (
    <Segment>
    <Progress percent={percent} indicating />
    <br />
    {task.name}
    <br />
    <Button onClick={didItHandler} >I did it</Button>
    <Button onClick={didItNotHandler} >I did not</Button>
    </Segment>
    )
  
}

