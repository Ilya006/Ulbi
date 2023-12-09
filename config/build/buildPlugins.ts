import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { BuildPaths } from './types';

export function buildPlugins({ template }: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: template,
    }),
    new webpack.ProgressPlugin(),
    new Dotenv({
      systemvars: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthast:8].css',
    }),
  ];
}
