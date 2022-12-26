import React from 'react'
import { Userconsumer } from './User'

const Grandchild = () => {
  return (
<Userconsumer>
  {
    (Username=>{
        return <div>Hello {Username}</div>
    })
  }
</Userconsumer>
  )
}

export default Grandchild
