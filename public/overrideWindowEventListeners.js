// Override window even listeners to showcase error boundaries in development mode
// Don't do this in production code

const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;
let errorListeners = [];

window.addEventListener = (type, ...listeners) => {
    if (type === 'error') {
        errorListeners = [
            ...errorListeners,
            ...listeners
        ];
    }
    originalAddEventListener(type, ...listeners);
};

window.removeEventListener = (type, ...listeners) => {
    if (type === 'error') {
        errorListeners.filter(listener => !listeners.includes(listener));
    }
    originalRemoveEventListener(type, ...listeners);
};

window.addWindowErrorEventListeners = () => {
    errorListeners.forEach(listener => originalAddEventListener('error', listener));
};

window.removeWindowErrorEventListeners = () => {
    errorListeners.forEach(listener => { originalRemoveEventListener('error', listener) });
};
