module.exports = {
  name: "api-health-check",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/api-health-check/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
