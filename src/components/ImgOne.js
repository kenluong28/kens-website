import { Parallax } from 'react-parallax';
import Sky from '../imgs/sky.jpg';

const ImgOne = () => (
    <Parallax className="image" bgImage={Sky} strength={800} id="home">
        <div className='content'>
            <span className='img-txt'>ken luong</span>
        </div>
    </Parallax>
);

export default ImgOne