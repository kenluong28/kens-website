import { Parallax } from 'react-parallax';
import Gal from '../imgs/galaxy.jpg';

const ImgThree = () => (
    <Parallax className="image" bgImage={Gal} strength={800} id='projects'>
        <div className='content'>
            <span className='img-txt'>.projects()</span>
        </div>
    </Parallax>
);

export default ImgThree