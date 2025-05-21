import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.result === "success") {
                    setData(res.rates); // Stores exchange rates (e.g., { "EUR": 0.85, "INR": 82.33 })
                }
            })
            .catch((err) => console.error("API Error:", err));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;