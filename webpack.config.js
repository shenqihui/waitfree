// 参考 https://github.com/sorrycc/roadhog/issues/69 进行 hash 配置。

// const fs = require('fs');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

module.exports = (config, env) => {
  config.module.loaders[0].exclude.push(/\.ejs$/);
  config.module.loaders.forEach((loader) => {
    if ('babel' === loader.loader) {
      // eslint-disable-next-line
      loader.exclude = [/node_modules/];
    }
  });
  if ('production' === env) {
    Object.assign(config.output, {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].async.js',
    });

    const plugins = config.plugins.map((plugin) => {
      if (plugin instanceof ExtractTextPlugin) {
        return new ExtractTextPlugin('[name].[contenthash:20].css');
      }
      else if (plugin instanceof webpack.optimize.CommonsChunkPlugin) {
        return new webpack.optimize.CommonsChunkPlugin({
          name: 'common',
          filename: 'common.[chunkhash:20].js',
        });
      }
      else {
        return plugin;
      }
    });

    plugins.push(
      new HtmlWebpackPlugin({
        template: 'ejs!src/index.ejs',
        inject: true,
        minify: {
          collapseWhitespace: true,
        },
        production: true,
      }),
      new WebpackChunkHash({ algorithm: 'md5' }),
    );

    Object.assign(config, {
      plugins,
    });
  }
  else {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: 'ejs!src/index.ejs',
        inject: true,
      }),
    );
  }
  return config;
};
