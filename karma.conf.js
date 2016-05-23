'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/should/should.js',
      'src/*.js',
      'test/*.js'
    ],
    client: {
      mocha: {
        reporter: 'html' // change Karma's debug.html to the mocha web reporter 
        // ,ui: 'tdd'
      }
    },
    preprocessors: {
      'src/*.js': ['coverage']
    },
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test 
      suppressErrorSummary: true,  // do not print error summary 
      suppressFailed: false,  // do not print information about failed tests 
      suppressPassed: false,  // do not print information about passed tests 
      suppressSkipped: true,  // do not print information about skipped tests 
      showSpecTiming: false // print the time elapsed for each spec 
    },
    plugins: ['karma-mocha', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['PhantomJS', 'Firefox'],
    reporters: ['spec', 'coverage','mocha'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage.json',
      }, {
        type: 'lcov',
        subdir: '.'
      }, {
        type: 'text-summary'
      }]
    }
  });
};