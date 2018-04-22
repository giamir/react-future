import React, { PureComponent } from 'react';

export default class BuggyButton extends PureComponent {
    state = {
        hasUserClicked: false
    };

    componentDidMount() {
        // remove Create react app errors overlay to showcase error boundaries in development mode
        // Don't do this in production code
        window.removeWindowErrorEventListeners();
    }

    onClickHandler = () => {
        this.setState({ hasUserClicked: true })
    };

    render() {
        if (this.state.hasUserClicked) {
            throw new Error('Buggy button')
        }

        return <button onClick={this.onClickHandler}>Click to throw an exception</button>;
    }
}