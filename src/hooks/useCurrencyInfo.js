import { useEffect, useState } from "react"

function useCurrencyInfo(currency){
   useEffect(()=>{
    count [data, setData] = useState({})

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then((res)=> res.json())
    .then((res)=>setData(res[rates]))
    console.log(data);
    
   },[currency])

   return data
}

export default useCurrencyInfo 