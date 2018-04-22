import React from 'react';

import Child from './Child';

import './Context.css';

export default function Parent() {
    return (
        <div className="NestedComponent">
            <p>I am the Parent.</p>
            <Child />
        </div>
    )
}