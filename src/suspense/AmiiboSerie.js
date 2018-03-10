import React from 'react';
import Spinner from './Spinner';

export default function AmiiboSerie({ serie, onAmiiboSerieClick, isLoading }) {
    return (
        <li onClick={() => onAmiiboSerieClick(serie)}>
            {serie.name}
            {isLoading && <Spinner size="small" />}
        </li>
    );
}