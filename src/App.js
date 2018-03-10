import React, { PureComponent, Fragment } from 'react';
import { fetchTranslation } from './api';
import { createFetcher, Placeholder } from './future';

const translationFetcher = createFetcher(fetchTranslation);

function Translate(props) {
    return props.text
        ? <b>{translationFetcher.read(props.text)}</b>
        : null;
}


export default class App extends PureComponent {
    state = {
        input: 'hello',
        readyInput: ''
    };

    render() {
        return (
            <Fragment>
                <input
                    value={this.state.input}
                    onChange={e => {
                        this.setState({ input: e.target.value });
                        this.deferSetState({ readyInput: e.target.value });
                    }}
                />
                <br />
                <Placeholder
                    delayMs={1500}
                    fallback={<b>translating...</b>}
                >
                    <Translate text={this.state.readyInput} />
                </Placeholder>
            </Fragment>
        );
    }
}

