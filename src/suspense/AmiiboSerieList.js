import React from 'react';
import { createFetcher } from './future';

import { fetchAmiiboSerie } from './api';
import Amiibo from './Amiibo';

const amiiboSerieFetcher = createFetcher(fetchAmiiboSerie);

export default function AmiiboSerieList({ amiiboSerie }) {
    const serie = amiiboSerieFetcher.read(amiiboSerie.key);
    const listItems = serie.amiibo.map(amiibo =>
            <Amiibo key={amiibo.tail} amiibo={amiibo} />
    );

    return <ul>{listItems}</ul>;
}