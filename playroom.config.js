module.exports = {
    components: './src/index.js',
    outputPath: './storybook-static/playroom',
    exampleCode: '<Hero/>',
    openBrowser: false,
    webpackConfig: () => ({
        module: {
           rules: [{
               test: /\.scss$/,
               use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
           },
           {
               test: /\.(jsx|js)$/,
               use: {
                   loader: "babel-loader",
                   options: {
                        plugins: [
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/transform-runtime",
                            "babel-plugin-react-docgen",
                        ],
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
                exclude: /node_modules/,
            },],
        }
    }),
  };