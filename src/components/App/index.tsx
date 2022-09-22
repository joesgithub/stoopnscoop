import { Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import Product from '../Product';

import './styles.scss';

const App = (props) => {
    const { products, children } = props;
    const [prods, setProds] = useState(null);

    useEffect(() => {
        console.log('useEffect', products)
        setProds(products);
    }, [products]);

    useEffect(() => {
        prods && document.querySelector('.logo').classList.add('animateOut');
    }, [prods]);

    return (
        <>
            {prods?.map(prod => <Product item={prod} />)}
        </>
    );
}

export default App;