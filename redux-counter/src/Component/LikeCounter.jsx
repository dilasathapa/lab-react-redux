import { useState } from "react";
import { legacy_createStore as createStore } from "redux";
import { incrementNumber, decrementNumber } from "./Action";
import reducer from "./Reducer";

// const store = createStore(reducer);

let store = createStore(reducer)
export default function Counter() {
  const [count, setCounter] = useState(0);
    // console.log(count)
    //   console.log(store.getState())
    
  store.subscribe(() => {
    console.log("cc", store.getState().count)
    setCounter(store.getState().count);
  });

  return (
    <div>
      <h3>{count}</h3>
      {/* {console.log("cg", incrementNumber())} */}
      <button onClick={() => store.dispatch(incrementNumber())}>Like</button>
      <button onClick={() => store.dispatch(decrementNumber())}>Unlike</button>
    </div>
  );
}