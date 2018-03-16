import React, { Fragment } from 'react';

import './TimeSlicing.css';

export default function Switch({ on, className = '', ...props }) {
    return (
        <Fragment>
            <input
                className="toggle-input"
                type="checkbox"
            />
            <button
                className={`${className} toggle-btn ${on
                    ? 'toggle-btn-on'
                    : 'toggle-btn-off'}`}
                aria-expanded={on}
                {...props}
            />
        </Fragment>
    )
}
