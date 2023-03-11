import React from 'react';
import { Parallax } from 'react-parallax';
import Sat from '../imgs/satellite.jpg';

const ImgTwo = () => {
    return (
        <div id='about'>
            <Parallax className="image" bgImage={Sat} strength={800}>
                <div className='content'>
                    <span className='img-txt'>.about()</span>
                </div>
            </Parallax>
        </div>
    )
}

export default ImgTwo
