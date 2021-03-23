
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
module.exports = {
  mode: 'production',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('https://petgram-server-eli.elizabethriver.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram -- Your app to share pets photos',
      short_name: 'Petgram ✌🐶',
      description: 'This is the worderfull app pets',
      background_color: '#ffffff',
      theme_color: '#b1a',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/dogs.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/assets/dogs.png'),
          size: '1024x1024' // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/assets/dogs.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    })
  ],
  devServer: {
    open: true,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }

        }
      }
    ]
  }

}
