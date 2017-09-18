const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const helpers = require('./helpers');

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev


/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const PUBLIC = process.env.PUBLIC_DEV || HOST + ':' + PORT;
const AOT = process.env.BUILD_AOT || helpers.hasNpmFlag('aot');
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  host: HOST,
  port: PORT,
  public: PUBLIC,
  ENV: ENV,
  HMR: HMR,
  AOT: AOT
};


/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
    return webpackMerge(commonConfig({env: ENV}), {
        output:{
            path: helpers.root('dist'),
            filename: '[name].bundle.js',
            sourceMapFilename: '[file].map',
            chunkFilename: '[id].chunk.js',
            library: 'ac_[name]',
            libraryTarget: 'var',
        },
        module: {
            
            rules: [
            
                /**
                * Css loader support for *.css files (styles directory only)
                * Loads external css styles into the DOM, supports HMR
                *
                */
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                    include: [helpers.root('src', 'styles')]
                },
        
                /**
                 * Sass loader support for *.scss files (styles directory only)
                 * Loads external sass styles into the DOM, supports HMR
                 *
                 */
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                    include: [helpers.root('src', 'styles')]
                },
        
            ]
            
        }
    });
}