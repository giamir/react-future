import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import BuggyButton from './BuggyButton';

import './ErrorBoundaries.css';

export default function ErrorBoundaries() {
    return (
        <div className="ErrorBoundaries">
            <h1>Error Boundaries</h1>
            <ErrorBoundary>
                <BuggyButton />
            </ErrorBoundary>
        </div>
    );
}