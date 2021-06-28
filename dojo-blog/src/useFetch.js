import {useState , useEffect } from 'react'; 

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [load, setLoad]=useState(true);
    const [error,setError] =useState(null);

    useEffect(()=>{
        const abortCont=new AbortController();
        fetch(url,{signal: abortCont.signal})
            .then( (res) =>{
                if(!res.ok){
                    throw Error("Unable to Fetch..." );
                }
                return res.json();
            })
            .then( (data) =>{
                setData(data);
                setLoad(false);
            })
            .catch((e)=>{
                if(e.name === 'AbortError' ){
                    console.log('fetch aborted');
                }
                else{
                    setError(e.message);
                    setLoad(false);
                }
            })
        return ()=>abortCont.abort();
    },[url]); 
    return {data ,load , error };
}
export default useFetch;