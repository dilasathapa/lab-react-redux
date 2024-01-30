let initialState = {
    count: 0,
  };
  
  const reducer = (state = initialState, action) => {
    // console.log(state.count)
    // let {count } = state
    // console.log("ac", action.type)
    switch (action.type) {
      case "INCREMENT":
        // console.log("che1")
        return ({
            ...state,
          count: state.count + 1,
        });
  
      case "DECREMENT":
        // console.log("che2")

        return ({
            ...state,
          count: state.count-1,
        });
  
      default:
        return state;
    }
  };
  
  export default reducer;



