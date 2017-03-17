var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      // 'react-hot-loader/patch',
      // the above code, as well as 'react-hot-loader/babel' in .babelrc plugins
      // are buggy and not being read well, hmm...
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      "./app.jsx"
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
          { 
            test: /\.css$/, 
            loader: 'style!css' 
          }
        ],
        rules: [
          { 
            test: /\.txt$/, 
            use: 'raw-loader' 
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
    }
};