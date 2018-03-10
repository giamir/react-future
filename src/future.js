import React, { Timeout, Component } from 'react';
import { unstable_deferredUpdates } from 'react-dom';
import { createCache, createResource } from 'simple-cache-provider';

let cache;
function initCache() {
    cache = createCache(initCache);
}
initCache();

export function createFetcher(fetch) {
    const res = createResource(fetch);
    return {
        read(...args) {
            return res(cache, ...args);
        },
    };
}

export function Placeholder({ delayMs, fallback, children }) {
    return (
        <Timeout ms={delayMs}>
            {isExpired => isExpired ? fallback : children}
        </Timeout>
    );
}

Component.prototype.deferSetState = function (partialState) {
    // unstable_deferredUpdates not working in event handlers issue workaround
    // https://twitter.com/dan_abramov/status/971090711893377026
    Promise.resolve(() => unstable_deferredUpdates(() => {
        this.setState(partialState);
        }))
        .then(deferredUpdates => deferredUpdates());
};
