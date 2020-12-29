import {useState} from 'react';

const useInputScale = (array) => {
    const scale = array
    const [ state, setState ] = useState(array[0])
    
    
    const stepScaleUp = () => {
        let currentElement = array.indexOf(state)

        if (currentElement < scale.length -1){
            currentElement++
            setState(array[currentElement]);
        } else {
            currentElement = 0
            setState(array[currentElement]);
        }
    }
    const stepScaleDown = () => {
        let currentElement = array.indexOf(state)

        if (currentElement > 0){
            currentElement--
            setState(array[currentElement]);
        } else {
            currentElement = scale.length -1
            setState(array[currentElement]);
        }
    }

    return [ state, stepScaleUp, stepScaleDown];
}

export default useInputScale