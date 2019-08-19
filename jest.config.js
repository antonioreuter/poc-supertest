module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    coveragePathIgnorePatterns: ["<rootDir>/test", "<rootDir>/node_modules"],
    coverageThreshold: {
      global: {
        branches: 75,
        functions: 90,
        lines: 90,
        statements: 90
      }
    }
  };
  