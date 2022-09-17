import { Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

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
            <div class="counter">
                {prods?.[0].name}
            </div>
        </>
    );
}

export default App;