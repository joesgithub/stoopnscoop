import { Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import './styles.scss';

const Product = (props) => {
    const { item: {
        name,
        defaultVariant: {
            sku,
            price,
            // images,
        },
        components: [{
            content: {
                plainText: [summary],
            },
        }],
    } } = props;

    const lowerName = name.toLowerCase().replace(' ', '-');
    const nameArray = name.split(' ');
    const nameStart = nameArray.shift();
    const nameEnd = nameArray.join(' ');

    return (
        <div class={`product product--${lowerName}`}>
            <h2 class="product__title">{nameStart} <span class="product__title--end text--zighead">{nameEnd}</span></h2>
            <div class="product__price">${price}.00</div>
            {/*{images?.map(({url}) => <img class="product__img" src={url} />)}*/}
            <div class="product__summary">{summary}</div>
        </div>
    );
}

export default Product;