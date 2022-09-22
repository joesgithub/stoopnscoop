import { Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import './styles.scss';

const Product = (props) => {
    const { item: {
        name,
        defaultVariant: {
            sku,
            price,
            images,
        }
    } } = props;

    const lowerName = name.toLowerCase().replace(' ', '-');

    return (
        <div class={`product product--${lowerName}`}>
            <div>{name}</div>
            <div>{sku}</div>
            <div>${price}.00</div>
            {images?.map(({url}) => <img src={url} />)}
        </div>
    );
}

export default Product;