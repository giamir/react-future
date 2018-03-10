import React, { PureComponent, Fragment } from 'react';
import { Placeholder, Loading } from './future';

import Spinner from './Spinner';
import AmiiboSerieList from './AmiiboSerieList';
import AmiiboSeriesList from './AmiiboSeriesList';

import './Suspense.css';

export default class Suspense extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            amiiboSerie: null,
            showAmiiboSerie: false
        };
        this.handleAmiiboSerieClick = this.handleAmiiboSerieClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleAmiiboSerieClick(amiiboSerie) {
        this.setState({
            amiiboSerie: amiiboSerie
        });
        this.deferSetState({
            showAmiiboSerie: true
        });
    }

    handleBackClick() {
        this.setState({
            amiiboSerie: null,
            showAmiiboSerie: false
        });
    }

    renderAmiiboSeriesList(loadingId) {
        return (
            <Fragment>
                <h1>All Amiibo series</h1>
                <Placeholder
                    delayMs={1500}
                    fallback={<Spinner size="large" />}
                >
                    <AmiiboSeriesList
                        onAmiiboSerieClick={this.handleAmiiboSerieClick}
                        loadingId={loadingId} />
                </Placeholder>
            </Fragment>
        );
    }

    renderAmiiboSerieList() {
        const { amiiboSerie } = this.state;

        return (
            <Fragment>
                <h1>
                    <button onClick={this.handleBackClick}>←</button>
                    {amiiboSerie.name}
                </h1>
                <AmiiboSerieList amiiboSerie={amiiboSerie} />
            </Fragment>
        );
    }

    render() {
        const { showAmiiboSerie, amiiboSerie } = this.state;

        return (
            <div className="Suspense">
                <Loading>
                    {isLoading => showAmiiboSerie
                        ? this.renderAmiiboSerieList()
                        : this.renderAmiiboSeriesList(
                            isLoading ? amiiboSerie.key : null
                        )
                    }
                </Loading>
            </div>
        );
    }
}


