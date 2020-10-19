module.exports = (api) => {
  api.cache(true);
  const isProduction = process.env.BABEL_ENV === "production";

  const config = {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    plugins: [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/transform-runtime",
    ],
  };

  if (isProduction) {
    config.plugins.push([
      "babel-plugin-transform-remove-imports",
      {
        test: "\\.(scss|css)$",
      },
    ]);
    config.ignore = ["**/*.test.js", "**/*.stories.js"];
  }

  return config;
};
