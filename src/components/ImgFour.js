import React from 'react';
import { Parallax } from 'react-parallax';
import SpX from '../imgs/spacex.jpg';

const ImgFour = () => {
    return (
        <div id='connect'>
            <Parallax className="image" bgImage={SpX} strength={800} id='connect'>
                <div className='content'>
                    <span className='img-txt'>.connect()</span>
                </div>
            </Parallax>
        </div>
    )
}

export default ImgFour
