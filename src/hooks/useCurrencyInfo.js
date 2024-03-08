import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) // putting an empty object because if fetch call does not happen, the program will loop through the empty object and it will not crash
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;
