let state = null;
let listeners = [];

const createState = (initial) => {
    state = new Proxy(initial, {
        set(target, key, newState) {
            if (target[key] === newState) return false;
            console.log(`[state change] ${key}: ${target[key]} => ${newState}`);

            target[key] = newState;
            listeners.forEach((component) => component. render());

            return true;
        }
    });
    return state;
};

const active = (newListener) => {
    if(!listeners.includes(newListener)) listeners = [...listeners, newListener];

    return () => {
        listeners = listeners.filter((listener) => listener != newListener);
    }
}

const store = {
    state,
    createState,
    active,
}

export default store;
export { state, createState, active };
