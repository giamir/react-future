import React from 'react';
import { createFetcher } from './future';

import { fetchAmiiboSeries } from './api';
import AmiiboSerie from './AmiiboSerie';

const amiiboSeriesFetcher = createFetcher(fetchAmiiboSeries);

export default function AmiiboSeriesList({ onAmiiboSerieClick, loadingId }) {
    const series = amiiboSeriesFetcher.read('amiiboSeries');
    const listItems = series.amiibo.map(serie =>
        <AmiiboSerie key={serie.key}
                     serie={serie}
                     onAmiiboSerieClick={onAmiiboSerieClick}
                     isLoading={serie.key === loadingId} />
    );

    return <ul>{listItems}</ul>;
}