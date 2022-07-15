import React, { useState } from 'react';



const Input = function ({input, setInput}) {

    function inputter() {
        setInput()
    }

    return (
        <div class='inputik'>
            {/* <h1>{input}</h1> */}
            <input type="text" class="input" value={input} onChange={e => setInput(e.target.value)}/>
        </div>
        
    )
}
export default Input;