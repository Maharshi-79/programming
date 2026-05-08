import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../app/userSlice';
const MyTask = () => {

    const {number} = useSelector((state) => state.user);
    const dispatch = useDispatch();
  return (
   <div className="container">
  <h1>My Task</h1>

  <h2>Number: {number}</h2>

  <div className="btn-group">
    <button
      className="btn increment"
      onClick={() => dispatch(increment())}
    >
      Increment
    </button>

    <button
      className="btn decrement"
      onClick={() => dispatch(decrement())}
    >
      Decrement
    </button>
  </div>
</div>
  )
}

export default MyTask