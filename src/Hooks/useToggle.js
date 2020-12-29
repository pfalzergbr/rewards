import { useState } from 'react';


const useToggle = (value) => {
    const [ state, setState ] = useState(value)

    const useToggle = () => {
        setState(!state);
    }

    return [ state, useToggle ]
}

export default useToggle