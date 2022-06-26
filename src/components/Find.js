import '../css/App.css';
import React from 'react';
import { Button } from 'antd';

const Find = (props) => {
    let { findResultHandler, history, disabled } = props;
    const handleButtonClick = ()=>{
        history.push('/result');
        findResultHandler();
    }
    return (
        <div className="find-button">
            <Button type="primary" disabled={disabled} onClick={handleButtonClick}>
                Find Falcone!
            </Button>
        </div>
    );
}

export default Find;
