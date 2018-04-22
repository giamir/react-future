import React, { PureComponent } from 'react';
import { Placeholder, Loading } from './future';

import AmiiboSeriesList from './AmiiboSeriesList';
import AmiibosList from './AmiibosList';

import Spinner from './Spinner';

import './Suspense.css';

export default class Suspense extends PureComponent {
    state = {
        selectedSeries: null,
        showSelectedSeries: false
    };

    handleSeriesClick = series => {
        this.setState({
            selectedSeries: series
        });
        this.deferSetState({
            showSelectedSeries: true
        });
    };

    handleBackClick = () => {
        this.setState({
            selectedSeries: null,
            showSelectedSeries: false
        });
    };

    renderAllAmiiboSeries(loadingId) {
        return (
            <>
                <h1>All Amiibo series</h1>
                <Placeholder
                    delayMs={1500}
                    fallback={<Spinner size="large" />}
                >
                    <AmiiboSeriesList
                        onSeriesClick={this.handleSeriesClick}
                        loadingId={loadingId}
                    />
                </Placeholder>
            </>
        );
    }

    renderAmiibosBySeries(selectedSeries) {
        return (
            <>
                <h1>
                    <button onClick={this.handleBackClick}>←</button>
                    {selectedSeries.name}
                </h1>
                <Placeholder
                    delayMs={5000}
                    fallback={<Spinner size="large" />}
                >
                    <AmiibosList selectedSeriesKey={selectedSeries.key} />
                </Placeholder>
            </>
        );
    }

    render() {
        const { showSelectedSeries, selectedSeries } = this.state;

        return (
            <div className="Suspense">
                <Loading>
                    {isLoading => showSelectedSeries
                        ? this.renderAmiibosBySeries(selectedSeries)
                        : this.renderAllAmiiboSeries(
                            isLoading ? selectedSeries.key : null
                        )
                    }
                </Loading>
            </div>
        );
    }
}
