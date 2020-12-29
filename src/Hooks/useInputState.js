import { useState } from 'react';

const useInputState = ( value ) => {
    const [input, setInput ] = useState(value);
    
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const reset = () => {
        setInput("")
    }

    return [input, handleChange, reset];

}


export default useInputState;

