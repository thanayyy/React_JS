import { useState } from 'react';
export default function Counter(){
    console.log('Counter CompoLan');
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count+1);

    }
    function decrement(){
        setCount(count-1);
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}