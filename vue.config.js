module.exports = {
    devServer: {
        port: 8080,
        disableHostCheck: true,
        historyApiFallback: true,
        proxy: 'https://rickandmortyapi.com/api',
        https: true,
    },
};
