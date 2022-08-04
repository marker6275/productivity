import React from 'react';
import ReactPlayer from 'react-player';
import './Youtube.css';

const Youtube = () => {

    return (
        <div className="Player">
            <ReactPlayer
            url='https://youtu.be/S8GpX3SAeig?list=PLsWOEapDJOmbs_Dm_rHar4D8htMOPLJvF'
            videoWidth="650"
            videoHeight="365.625"
            volume="0.5"
            controls="on" />
        </div>
    );
};

export default Youtube;