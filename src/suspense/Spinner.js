import React from 'react';

const styles = {
    small: { height: '25px' },
    medium: { height: '100px' },
    large: { height: '300px' }
};

export default function Spinner({ size }) {
    return <img style={styles[size]} alt="spinner" src="./images/cappy.gif" />
}