const jestSettings = {
  preset: "ts-jest",
  testMatch: ["**/*.test.ts"],
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
