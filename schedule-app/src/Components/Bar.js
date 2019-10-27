import React, { useState } from 'react'
import { Button, Progress } from 'semantic-ui-react'

export default function(props) {
  let task = props.task
  const [percent, setPercent] = useState(20)

  let increment = () => {
    setPercent(percent >= 100 ? 0 : percent + 10)
  }
  let decrement = () => {
    setPercent(percent >= 100 ? 0 : percent - 10)
  }


  return (
    <div>
    <Progress percent={percent} indicating />
    <Button onClick={increment}>Increment</Button>
    <Button onClick={decrement}>Decrement</Button>
    <br />
    {task.name}
    <br />
    <Button onClick={increment}>I did it</Button>
    </div>
    )
  
}

