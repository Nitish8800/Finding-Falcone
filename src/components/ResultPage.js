import React from 'react';
import '../css/App.css'
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';


const ResultPage = (props) => {
    let {result, totalTime, history, resetSelectionState} = props,
        handleButtonClick = ()=>{
            resetSelectionState();
            history.push('/');
        };
        return (
            <div className= "result-container">
                {
                    result.status !== 'false' ? 
                        <div>
                                <div className="result-success-text">Sucess! Congratulations on Finding Falcone. King Shan is mighty pleased.</div>
                                <div className="result-time-details">Time taken: {totalTime}</div>
                                <div className="result-success-text">Planet found: {result.planet_name}</div>
                        </div>
                    :  
                    <div className="result-failure-text">
                        Failure! Could not find Flacone. Click on the button to try again
                    </div>
                }
                 <Button type="primary" onClick={handleButtonClick}>
                    Start Again
                </Button>
           </div>
        )
}

export default withRouter(ResultPage);
