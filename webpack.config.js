const path = require('path');

 
    const PATHS = {
        source: path.join(__dirname, 'source'),
        build: path.join(__dirname, 'build')
    };
    
module.exports = {
        entry: './src/js/index.js',
        output: {
            path: PATHS.build,
            filename: 'bundle.js'
    },

};