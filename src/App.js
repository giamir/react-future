import React, { Fragment, PureComponent } from 'react';

import Suspense from './suspense/Suspense';
import TimeSlicing from './time-slicing/TimeSlicing';
import Context from './context/Context';

import './App.css';

const futureFeatures = {
    suspense: Suspense,
    timeSlicing: TimeSlicing,
    context: Context
};

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            feature: null
        };
        this.handleFeatureClick = this.handleFeatureClick.bind(this);
    }

    handleFeatureClick(feature) {
        this.setState({ feature });
    }

    render() {
        const { feature } = this.state;
        const Feature = futureFeatures[feature] || (() => <h2>⚡ Choose a feature from the future ⚡</h2>);

        return (
            <Fragment>
                <nav>
                    <h1>React Future</h1>
                    <button
                        className={feature === 'suspense' ? 'active' : null}
                        onClick={() => this.handleFeatureClick('suspense')}>
                        Suspense
                    </button>
                    <button
                        className={feature === 'timeSlicing' ? 'active' : null}
                        onClick={() => this.handleFeatureClick('timeSlicing')}>
                        Time Slicing
                    </button>
                    <button
                        className={feature === 'context' ? 'active' : null}
                        onClick={() => this.handleFeatureClick('context')}>
                        New Context API
                    </button>
                </nav>
                <main>
                    <Feature />
                </main>
            </Fragment>
        );
    }
}