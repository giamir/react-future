import React, { PureComponent } from 'react';

export default class ErrorBoundary extends PureComponent {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{ color: 'red' }}>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}