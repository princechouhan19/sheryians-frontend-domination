import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment, incrementAsync, incrementByAmount } from "./reducers/counterSlice";

function App() {
  const {value} = useSelector((state)=> state.counter);
  const dispatch = useDispatch();
  return (
    <div className="container m-auto bg-red-100 w-[90vw] mt-8 p-10 rounded-md">
      <h1 className="mb-5 text-center font-bold text-4xl text-red-900">
        counter: {value}
      </h1>

      <div className="text-center gap-4 flex justify-center">
        <button onClick={() => dispatch(increment())} className="text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2">
          Increment ⬆️
        </button>
        <button onClick={() => dispatch(decrement())} className="text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2">
          Decrement ⬇️
        </button>
        <button onClick={() => dispatch(incrementAsync(5))} className="text-red-900 border-red-900 border-2 rounded bg-transparent px-5 py-2">
          Increment by 5 ⬆️
        </button>
      </div>
    </div>
  );
}

export default App;