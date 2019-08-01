const path = require('path')
module.exports = {
  mode: 'none',
  devServer: {
    hot: false,
    inline: false
  },
  entry: './index.js',
  output: {
    // path: __dirname,
    path: path.resolve(__dirname, ''),
    filename: './bundle.js'
  },
  module: {
    rules:
    [
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      // {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},

      // {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: 'style!css!'},
      // {test: /\.less$/, loader: 'style!raw!css!less'},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      {
        // Only for area calendar
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }

      // { test: /\.js/, loader: 'imports?define=>false'}
      // { test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/, loader : 'url?prefix=font/&limit=10000'}
    ]
  }
  // node: {
  //   fs: "empty"
  // }
// Resolve for jquery UI
//     ,
//   resolve : {
//     alias: {
//       // bind version of jquery-ui
//       "jquery-ui": "jquery-ui/jquery-ui.js",
//       // bind to modules;

//       modules: path.join(__dirname, "node_modules/")
//     }}

}
