const path = require('path')
const { merge }  = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Cssnano = require('cssnano')
const Autoprefixer = require('autoprefixer')

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {
            encoding: 'base64'
          }
        }
      },
      {
        test: /\.(woff(2)?|jpg)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top',
              singleton: true
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                Autoprefixer,
                Cssnano
              ]
            }
          }
        ]
      },
      {
        test: /\.(svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true
          }
        }
      }
    ]
  }
};

const prodConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/index.theme'),
        to: path.resolve(__dirname, 'dist'),
        toType: 'dir'
      }
    ])
  ],
  mode: 'production'
}

const devConfig = {
  entry: [
    './src/utils/example_state.dev.js',
    './src/index.js'
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  mode: 'development'
}

const demoConfig = {
  entry: [
    './src/utils/example_state.demo.js',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'main.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  mode: 'production'
}

module.exports = env => {
  switch(env) {
    case 'production':
      return merge(commonConfig, prodConfig)
    case 'development':
      return merge(commonConfig, devConfig)
    case 'demo':
      return merge(commonConfig, demoConfig)
    default:
      throw new Error('No matching configuration found')
  }
}
