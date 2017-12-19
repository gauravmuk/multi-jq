require.config({
    baseUrl: '.',
    waitSeconds: 0,
    paths: {
        'jquery': './src/jquery-1.11.3',
        'jquery-noConflict': './src/jquery-noConflict',
        'jquery2-noConflict': './src/jquery2-noConflict',
        'jquery-2': './src/jquery-2.1.4',
        'app': './src/app'
    },
    shim: {
        "jquery-2": {
            exports: 'jQuery'
        }
    }
});
