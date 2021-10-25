module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)?"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  moduleNameMapper: {
    "@styles(.*)$": "<rootDir>/src/styles/$1",
  },
  snapshotSerializers: ["@emotion/jest/serializer"],
};
