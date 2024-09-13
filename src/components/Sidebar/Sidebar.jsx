import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    const {list} = useSelector(({categories}) => categories);

    return (
        <section className="sidebar">
            <div className="title">CATEGORIES</div>
            <nav>
                <ul className="menu">
                    {list.map(({id, name}) => (
                        <li key={id}>
                            <NavLink 
                                className={({ isActive }) => 
                                    `${'link'} ${isActive ? 'active' : ""}`
                                }
                                to={`/categories/${id}`}>{name}</NavLink>
                        </li>  
                    )).slice(0, 5)}          
                </ul>
            </nav>

            <div className="footer">
                <a href="/help" target="_blank" className='link'>Help</a>
                <a 
                    href="/terms" 
                    target="_blank" 
                    className='link' 
                    style={{textDecoration: "underline"}}>
                    Terms & Conditions
                </a>
            </div>
        </section>
    );
}

export default Sidebar;
