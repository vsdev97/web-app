module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 85,
      statements: 85,
    },
  },
};
