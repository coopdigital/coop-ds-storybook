module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coveragePathIgnorePatterns: ["^.+\\.stories\\.(js|jsx|ts|tsx)$"],
  coverageDirectory: "reports",
  setupFilesAfterEnv: ["<rootDir>/.jest/setupTests.js"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}",
  ],
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.css$": "<rootDir>/.jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/.jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "^.+\\.stories\\.(js|jsx|ts|tsx)$",
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/.jest/fileTransform.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["js", "ts", "json", "jsx", "node"],
};
