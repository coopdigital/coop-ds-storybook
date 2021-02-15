const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-a11y',{
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true,
    },
  },
  '@whitespace/storybook-addon-html',
  'storybook-addon-designs/register',],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
    });
    return config;
  },
};
