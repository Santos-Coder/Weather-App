import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <div className="intro">
            <div className="blue-circle-1"></div>
            <div className="blue-circle-2"></div>
            <div className="blue-circle-3"></div>
            <div className="opac">
                <h1>DES_</h1>
                <h1>IGN</h1>
            </div>
            <div className="intro-data">
                <div className="lft"></div>
                <div className="rgt">
                        <h1>Hello<span>.</span></h1>
                        <h1>I am</h1>
                        <h1>Patrick</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro;