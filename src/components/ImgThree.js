import React from 'react';
import { Parallax } from 'react-parallax';
import Gal from '../imgs/galaxy.jpg';

const ImgThree = () => {
    return (
        <div id='projects'>
            <Parallax className="image" bgImage={Gal} strength={800}>
                <div className='content'>
                    <span className='img-txt'>.projects()</span>
                </div>
            </Parallax>
        </div>
    )
}

export default ImgThree