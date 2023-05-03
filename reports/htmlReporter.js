const createMochawesomeReporter = require('mochawesome-report-generator');

module.exports = {
  createReport: async (results) => {
    const options = {
      reportDir: './reports',
      reportFilename: 'test-report',
      reportTitle: 'Automation Test Report',
      inline: true,
      ts: false
    };

    await createMochawesomeReporter.create(results, options);
  }
};