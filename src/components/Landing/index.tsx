import { Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import Product from '../Product';

import './styles.scss';

const App = (props) => {
    const { products, children } = props;
    const [prods, setProds] = useState(products);
    const [idx, setIdx] = useState(0);
    const imgs = prods.map(prod => prod.defaultVariant.images[0].url);

    useEffect(() => {
        setProds(products);
    }, [products]);

    useEffect(() => {
        prods && document.querySelector('.logo').classList.add('animateOut');
    }, [prods]);

    const handleUp = () => setIdx((prev) => prev > 0 ? prev-1 : prev);
    const handleDown = () => setIdx((prev) => prev < prods.length - 1 ? prev+1 : prev);

    return (
        <div class={`landing product--${idx}`}>
            <div class="left">
                <div class="left__container">
                    {imgs.map((src, i) => (
                        <div class={`product__image product__image--${i}`}>
                            <img class="product__img" src={src} />
                        </div>
                    ))}
                </div>
            </div>
            <div class="right">
                <button onClick={handleUp}>up</button>
                <button onClick={handleDown}>down</button>
                {prods?.map(prod => <Product item={prod} />)}
            </div>
        </div>
    );
}

export default App;