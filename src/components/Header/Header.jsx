
import { BsHandbag, BsHeart } from "react-icons/bs";

import {ROUTES} from '../../utils/routes'
import { Link } from 'react-router-dom';

import './Header.css';
import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" /> 
        </Link>
      </div>

      <div className="info">
        <div className="user">
          <div 
            className="avatar" 
            style={{backgroundImage: `url(${AVATAR})`}}/>

          <div className="user-name">Guest</div>
        </div>

        <form className='form'>
          <div className="icon">
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>

          <div className="input">
            <input 
              type="search" 
              name='search' 
              placeholder='Search for anyting...'
              autoComplete='off' 
              onChange={() => {}}
              value=''/>
          </div>

          {false && <div className="box"></div>}
        </form>

        <div className="account">
          <Link to={ROUTES.HOME} className='favourites'>
            <BsHeart className="account-icon"/>
            {/* <svg className={["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg> */}
          </Link>

          <Link to={ROUTES.CART} className='cart'>
            <BsHandbag className="account-icon-cart"/>
            {/* <svg className={["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg> */}
            <span className='count'>2</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Header;

