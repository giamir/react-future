import React from 'react';
import { createFetcher } from './future';

import { fetchAllAmiiboSeries } from './api';
import Spinner from './Spinner';

const allAmiiboSeriesFetcher = createFetcher(fetchAllAmiiboSeries);

export default function AmiiboSeriesList({ onSeriesClick, loadingId }) {
    const allAmiiboSeries = allAmiiboSeriesFetcher.read('allAmiiboSeries');

    return (
        <ul>
            {allAmiiboSeries.map(
                series => (
                    <li key={series.key} onClick={() => onSeriesClick(series)}>
                        {series.name}
                        {series.key === loadingId && <Spinner size="small" />}
                    </li>
                )
            )}
        </ul>
    );
}