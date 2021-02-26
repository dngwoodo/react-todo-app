import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'; // ts checking과 webpack을 동시에 실행시켜준다. 원래는 ts checking이 blocking형태(다음 동작을 막는 형태)로 돌아간다.
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const config: Configuration = {
  name: 'todo',
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: './client',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
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
          env: {
            development: {
              plugins: [require.resolve('react-refresh/babel')], // require.resolve를 사용하면 모듈 전체가 아닌 해당 파일만 가져온다.
            },
          },
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
    filename: '[name].js',
    publicPath: '/dist/',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};

export default config;
