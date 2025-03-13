// import { useEffect,useState } from "react";

// function useCurrencyInfo(currency){
//     const  [data, setData] = useState({})
//     //The Apis are always in the jsonn Formatt, we need o convert in the String...
//     useEffect(()=>{
       
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res)=>res.json())
//         .then((res)=>setData(res[currency]))
//         console.log(data);

//     },[currency])
//     return data;

// }

// export default useCurrencyInfo;


import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                console.log("Fetched currency data:", res[currency]); // Debug to check response
                setData(res[currency]); // Accessing inner currency object like { inr: 90.12, usd: 1.12, ... }
            })
            .catch((error) => {
                console.error("Failed to fetch currency data:", error);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;

