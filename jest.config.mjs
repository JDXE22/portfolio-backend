const jestSettings = {
  preset: "ts-jest",
  testMatch: ["**/*.test.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Test Report",
        includeFailureMsg: true,
        includeConsoleLog: true,
        sort: "titleAsc",
      },
    ],
  ],
};

export default jestSettings;
