import React from 'react';
import { Placeholder } from './future';

import Img from './Img';
import Spinner from './Spinner';

import './Suspense.css';

export default function Amiibo({ amiibo }) {
    return (
        <div className="Amiibo">
            <Placeholder
                delayMs={3000}
                fallback={<Spinner size="medium" />}
            >
                <Img src={amiibo.image} alt={amiibo.name} />
            </Placeholder>
            {amiibo.name}
        </div>
    );
}













// Using suspense

// const imageFetcher = createFetcher(
//     (src) => new Promise(resolve => {
//         const image = new Image();
//         image.onload = () => resolve(src);
//         image.src = src;
//     })
// );
//
// export default function Img(props) {
//     return <img src={imageFetcher.read(props.src)} alt={props.alt} {...props} />;
// }


// <Placeholder
//     key={amiibo.tail}
//     delayMs={5000}
//     fallback={<Spinner size="medium" />}
// >
//     <Img alt={amiibo.name} src={amiibo.image} />
// </Placeholder>