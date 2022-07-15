import React, { useState } from 'react';



const Counter = function () {
    const [count, setCount] = useState() //указываем, что произошло изменение

    function generate() {
        setCount()
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={generate}>Generate</button>
        </div>
    )
}
export default Counter;