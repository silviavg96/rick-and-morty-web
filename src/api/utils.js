export const flatten = (args) => {
    return args.reduce((acc, val) => acc.concat(val), []);
};

export const URLJoin = (args) => {
    return args
        .join('/')
        .replace(/\/+/g, '/')
        .replace(/\/$/, '')
        .replace(/^(.+):\//, '$1://')
        .replace(/^file:/, 'file:/')
        .replace(/\/(\?|&|#[^!])/g, '$1')
        .replace(/\?/g, '&')
        .replace('&', '?')
    ;
};