import React from 'react';

import { I18nProvider } from './I18nContext';
import Salutation from './Salutation';
import Description from './Description';

import './Context.css';

export default function Context() {
    return (
        <div className="Context">
            <I18nProvider>
                <Salutation />
                <Description />
            </I18nProvider>
        </div>
    );
}
