import React from 'react';

import './TimeSlicing.css';

export default function Text({ inputText, onChangeHandler }) {
    return <input className="Text" type="text" value={inputText} onChange={onChangeHandler} />;
}
