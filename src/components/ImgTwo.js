import { Parallax } from 'react-parallax';
import Sat from '../imgs/satellite.jpg';

const ImgTwo = () => (
    <Parallax className="image" bgImage={Sat} strength={800} id='about'>
        <div className='content'>
            <span className='img-txt'>.about()</span>
        </div>
    </Parallax>
);

export default ImgTwo