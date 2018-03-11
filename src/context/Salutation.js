import React from 'react';

import dictionary from './dictionary';
import { I18nConsumer } from './I18nContext';

export default function Salutation() {
    return (
        <I18nConsumer>
            {lang => <h1>{dictionary[lang].salutation}</h1>}
        </I18nConsumer>
    );
}
