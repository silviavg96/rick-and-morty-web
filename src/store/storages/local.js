const getLocal = (name) => {
    const match = localStorage.getItem(name);
    return match ? JSON.parse(match) : null;
};

const setLocal = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
};

const removeLocal = (name) => {
    localStorage.removeItem(name);
};

export default (state, options={}) => {
    const attrs = options.attrs || Object.keys(state);

    for (let attr of attrs) {
        const defaultValue = state[attr];

        Object.defineProperty(state, attr, {
            get() {
                return getLocal(attr) || defaultValue;
            },
            set(value) {
                if(value === null) {
                    return removeLocal(attr);
                }

                return setLocal(attr, value);
            }
        });
    }
}