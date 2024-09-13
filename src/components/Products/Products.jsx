
import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({title, style={}, products=[], amount}) => {

    const list = products.filter((_, i) => i < amount);

    return (
        <section className='products' style={style}>
            {title && <h2>{title}</h2> }     

            <div className="list">
                {list.map(({id, images, title, category: {name: cat}, price}) => (
                    <Link to={`/products${id}`} key={id} className='product'>
                        <div className="image" style={{backgroundImage: `url(${images[0]})`}}/>

                        <div className="wrapper">
                            <h3 className="title">{title}</h3>
                            <div className="cat">{cat}</div>
                            <div className="info">
                                <div className="prices">
                                    <div className="price">{price}$</div>
                                    <div className="oldPrice">
                                        {Math.floor(price * 0.8)}$
                                    </div>
                                </div>

                                <div className='purchases'>
                                    {Math.floor(Math.random() * 20 + 1)} purchased
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Products;
