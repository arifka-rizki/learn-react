import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error("Could not get the data");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setErr(null);
            })
            .catch( err => {
                if(err.name === "AbortError"){
                    console.log("fetch aborted")
                } else {
                    setErr(err.message)
                    setIsLoading(false);
                    console.log(err);
                }
            })
        return () => abortCont.abort();
    }, [url])
    return { data, err, isLoading }
}
export default useFetch;