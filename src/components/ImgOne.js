import React from 'react';
import { Parallax } from 'react-parallax';
import Sky from '../imgs/sky.jpg';

const ImgOne = () => {
    return (
        <div id='home'>
            <Parallax className="image" bgImage={Sky} strength={800}>
                <div className='content'>
                    <span className='img-txt'>ken luong</span>
                </div>
            </Parallax>
        </div>
    )
}

export default ImgOne
