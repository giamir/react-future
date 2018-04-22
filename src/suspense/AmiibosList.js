import React from 'react';
import { createFetcher } from './future';

import { fetchAmiibosBySeries } from './api';
import Amiibo from './Amiibo';

const amiibosBySeriesFetcher = createFetcher(fetchAmiibosBySeries);

export default function AmiibosList({ selectedSeriesKey }) {
    const amiibos = amiibosBySeriesFetcher.read(selectedSeriesKey);

    return (
        <ul>
            {amiibos.map(amiibo =>
                <li key={amiibo.tail}>
                    <Amiibo amiibo={amiibo} />
                </li>
            )}
        </ul>
    );
}