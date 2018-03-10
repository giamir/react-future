import React from 'react';
import { Placeholder } from './future';

import Spinner from './Spinner';
import Img from './Img';

import './Suspense.css';

export default function Amiibo({ amiibo }) {
    return (
        <li>
            <div className="Amiibo">
                <Placeholder
                    key={amiibo.tail}
                    delayMs={5000}
                    fallback={<Spinner size="medium" />}
                >
                    <Img alt={amiibo.name} src={amiibo.image} />
                </Placeholder>
                {amiibo.name}
            </div>
        </li>
    );
}