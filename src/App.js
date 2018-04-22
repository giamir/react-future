import React, { PureComponent } from 'react';

import Suspense from './suspense/Suspense';
import TimeSlicing from './time-slicing/TimeSlicing';
import Context from './context/Context';
import ErrorBoundaries from './errorBoundaries/ErrorBoundaries';

import './App.css';

const futureFeatures = {
    suspense: Suspense,
    timeSlicing: TimeSlicing,
    context: Context,
    errorBoundaries: ErrorBoundaries
};

export default class App extends PureComponent {
    state = {
        feature: null
    };

    handleFeatureClick = feature => {
        this.deferSetState({ feature });
    };

    render() {
        const { feature } = this.state;
        const Feature = futureFeatures[feature] || (() => <h2>Pick a feature</h2>);

        return (
            <>
                <nav>
                    <h1>React Features Showcase</h1>
                    <button
                        className={feature === 'errorBoundaries' ? 'active' : null}
                        onClick={() => this.handleFeatureClick('errorBoundaries')}
                    >
                        Error Boundaries
                    </button>
                    <button
                        className={feature === 'context' ? 'active' : null}
                        onClick={() => this.handleFeatureClick('context')}
                    >
                        New Context API
                    </button>
                    <button
                        className={feature === 'suspense' ? 'active' : null}
                        onClick={() => this.handleFeatureClick('suspense')}
                    >
                        (!) Suspense
                    </button>
                    <button
                        className={feature === 'timeSlicing' ? 'active' : null}
                        onClick={() => this.handleFeatureClick('timeSlicing')}
                    >
                        (!) Time Slicing
                    </button>
                </nav>
                <main>
                    <Feature />
                </main>
            </>
        );
    }
}