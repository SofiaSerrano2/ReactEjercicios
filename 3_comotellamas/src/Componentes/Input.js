import React from 'react' ;
    function Input ( {nombreInp,input} ) {
    return (
        <label>
            {nombreInp}
            <input values={input} type="text" id={nombreInp} name={nombreInp} />
        </label>
        ) ;
    }
export default Input;