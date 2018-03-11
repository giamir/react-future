import React from 'react';

import dictionary from './dictionary';
import { I18nConsumer } from './I18nContext';

export default function Description() {
    return (
        <I18nConsumer>
            {lang => <p>{dictionary[lang].description}</p>}
        </I18nConsumer>
    );
}
