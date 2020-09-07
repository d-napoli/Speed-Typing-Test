import React from 'react';

import {
    Letter
} from './styles';

export default (props) => {
    const text = props.text.split('');

    return (
        <>
            {
                text.map((s, i) => {
                    let elementClass;
                    if(i < props.userInput.length) {
                        elementClass = s === props.userInput[i] ? 'letterOkay' : 'letterWrong';
                    }
                    return <Letter className={elementClass} key={i}>{s}</Letter>
                })
            }
        </>    
    );
}