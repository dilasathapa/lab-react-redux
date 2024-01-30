const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

export const incrementNumber =()=>{
    return{ type : INCREMENT}
}

export const decrementNumber=()=>{
    return {  type : DECREMENT }
}

