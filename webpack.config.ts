import wepback from 'webpack';
import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config: wepback.Configuration = {
  name: 'todo',
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: 'client',
  },
  module: {
    rules: [
      // babel-loader
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [[
            '@babel/preset-env',
            {
              targets: { browsers: ['last 2 chrome versions'] },
              debug: true,
            },
          ],
          '@babel/preset-react',
          '@babel/preset-typescript',
          ],
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      // css-loader
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'], // css in js -> html, css -> js
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name.js]',
    publicPath: '/dist/',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ],
};

export default config;
