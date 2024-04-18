import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import './App.css'
import getproductsAction from './action'



function Getdata() {
    const [data, setdata] = useState([])
    let storedData = useSelector((store)=>{
      // console.log(store)
      return store.products;
    })
    const dispatch = useDispatch()
  console.log("store", storedData)
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => getproductsAction(data, dispatch))
        // .then((data1)=>setdata(data1))
    }, [])
  
    return (
      <>
        <div>
          {
            storedData.length <= 0 ? (
              <h1>data not found</h1>
            ) : (
              <div>
                <h1>data found</h1>
                {
                  storedData.map((e, i) => (
                    <div style={{display : "flex", border : "2px solid blue", justifyContent : "space-between", padding : "5px"}}>
                      <h3 key={i}>{e.title}</h3>
                      <img style={{width : "100px"}} src={e.image} alt="" />
                    </div>
  
                  ))
                }
              </div>
            )
          }
        </div>
      </>
    )
  }

  export default Getdata;
  