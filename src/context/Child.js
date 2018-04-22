import React from 'react';

import dictionary from './dictionary';
import { I18nConsumer } from './I18nContext';

import './Context.css';

export default function Child() {
    return (
        <div className="NestedComponent">
            <p>I am the Child.</p>
            <I18nConsumer>
                {lang => <h1>{dictionary[lang].nestedMessage}</h1>}
            </I18nConsumer>
        </div>
    );
}