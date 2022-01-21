const getCookie = (name) => {
    const match = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return match ? match[2] : null;
};

const setCookie = (name, value, days=1, domain='/') => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    document.cookie = `${name}=${value};path=${domain};expires=${date.toGMTString()}`;
};

const removeCookie = (name) => {
    setCookie(name, null, -1);
};

export default (state, options={}) => {
    const attrs = options.attrs || Object.keys(state);
    const days = options.days || 1;

    for (let attr of attrs) {
        const defaultValue = state[attr];

        Object.defineProperty(state, attr, {
            get() {
                return getCookie(attr) || defaultValue;
            },
            set(value) {
                if(value === null) {
                    return removeCookie(attr);
                }

                return setCookie(attr, value, days);
            }
        });
    }
}