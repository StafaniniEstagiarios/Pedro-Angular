module.exports = {
    preset: "jest-preset-angular",
    roots: ['src'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.jsx$': 'babel-jest',
      "^.+\\.(ts|html)$": "<rootDir>/node_modules/jest-preset-angular/preprocessor.js"
    },
    setupTestFrameworkScriptFile: "<rootDir>/src/setup-jest.ts",
    "testMatch": [
      "**/*.steps.js"
    ]
  }