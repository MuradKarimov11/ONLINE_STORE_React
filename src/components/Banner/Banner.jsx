
import '../Home/Home.css';
import bannerImg from '../../images/banner.png';

const Banner = () => {
  return (
    <section className="banner">
        <div className="left">
            <p className="content">NEW YEAR <span>SALE</span></p>
            <button className="more">See more</button>
        </div>

        <div 
            className="right"
            style={{backgroundImage: `url(${bannerImg})`}} 
        >
            <p className="discount">save to up <span>50%</span> off</p>            
        </div>
    </section>
  );
}

export default Banner;
