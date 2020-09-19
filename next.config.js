module.exports = {
    exportPathMap: function () {
        return {
            "/": { page: "/" },
        }
    },
    basePath: '/game-assets-generator',
    assetPrefix: '/game-assets-generator/',
    webpack: (config) => {
        config.module.rules = config.module.rules.map(rule => {
            if (rule.loader === 'babel-loader') {
                rule.options.cacheDirectory = false
            }
            return rule
        })
        return config
    }
}