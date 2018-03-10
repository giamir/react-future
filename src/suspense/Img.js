import React from 'react';
import { createFetcher } from './future';

const imageFetcher = createFetcher(
    (src) => new Promise(resolve => {
        const image = new Image();
        image.onload = () => resolve(src);
        image.src = src;
    })
);

export default function Img(props) {
    return <img src={imageFetcher.read(props.src)} alt={props.alt} {...props} />;
}