import React from 'react';

export default (props) => {
    if(props.symbols !== 0 && props.sec !== 0) {
        const wpm = (props.symbols / 5) / (props.sec / 60);

        return (
            <p>Speed: {Math.round(wpm)}</p>
        );
    } else {
        return null;
    }
}