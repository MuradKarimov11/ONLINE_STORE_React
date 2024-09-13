
import '../Home/Home.css';

import BG from '../../images/computer.png';

const Poster = () => (
    <section className='home'>
        <div className='title'>BIG SALE 20%</div>
        <div className='product'>
            <div className='text'>
                <div className='subtitle'>the bestseller of 2022</div>
                <h1 className='head'>LENNON r2d2 with NVIDIA 5090 TI</h1>
                <button className='button'>Shop Now</button>
            </div>
            <div className='image'>
                <img src={BG} alt="" />
            </div>
        </div>
    </section>
);

export default Poster;

