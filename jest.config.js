const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),

  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['text', 'lcov', 'json-summary'],
  collectCoverageFrom: ['**/*.(t|j)s'],
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
