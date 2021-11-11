import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import CounterValue from './CounterValue';
import Loader from './Loader';
import './Counter.css'

const Counter = () => {

    const [num, setNum] = useState()
    const [max, setMax] = useState()
    const [isLoading, setLoading] = useState(true)

    const incNum = () =>{
        if(num<max){
            setNum(num+1);
        }
        else{
            alert('Max Value ='+ max + '.');
        }
    }

    const decNum = () =>{
        if(num<=max){
            setNum(num-1);
        }
        else{
            alert('Max Value ='+ max + '.');
        }
    }

    useEffect(async () => {
            const res = await Axios.get("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json");
            console.log(res);
            if(res.data==null){
                setNum(1);
                setMax(1000);
            }
            else{
                setNum(res.data);
                setMax(1000);
            }
            const resp = await Axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', {"yashgarg": num });
            console.log(resp);
            setLoading(false);
    },[]);

    useEffect(async () => {
        setLoading(true);
        const resp = await Axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', {"yashgarg": num });
        console.log(resp);
        setLoading(false);
    },[num]);

    return (
        <>
            <Loader isLoad ={isLoading}/>
            <div className="main">
                <button className="btn1" onClick={decNum}> - </button>
                <h1>        
                    <input className="inp" type="number" value={num} onChange={e => setNum(+e.target.value)} />
                </h1>
                <button className="btn2" onClick={incNum}> + </button>
            </div>
            <div className="mainval">
            <CounterValue
                    data={num}
            />
            </div>
            <div className="text">
                *Note - Assuming max value as 1000 as no max value is present.
            </div>
        </>
    )
}
export default Counter