import { useState } from 'react'
import classes from './Test.module.scss'
import './index.scss'

export function Test (): any {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1 className={classes.box}>hello world</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}