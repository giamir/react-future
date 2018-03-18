import React, { Component } from 'react';

const I18nContext = React.createContext();

export class I18nProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en'
        };
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }

    toggleLanguage() {
        this.setState(({ lang }) => ({
            lang: lang === 'en' ? 'de' : 'en',
        }));
    }

    render() {
        return (
            <I18nContext.Provider value={this.state.lang}>
                <button onClick={this.toggleLanguage}>Toggle Language</button>
                {this.props.children}
            </I18nContext.Provider>
        )
    }
}

const I18nConsumer = I18nContext.Consumer;

export { I18nConsumer };
