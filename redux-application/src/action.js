const getproductsAction =(datainfo, dispatch)=>{
    console.log(datainfo)
    dispatch({
        type : "GET_PRODUCTS",
        payload : datainfo
    })
}

export default getproductsAction;