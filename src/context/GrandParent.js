import React from 'react';

import Parent from './Parent';

import './Context.css';

export default function GrandParent() {
    return (
        <div className="NestedComponent">
            <p>I am the GrandParent.</p>
            <Parent />
        </div>
    )
}
