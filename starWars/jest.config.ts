export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
  },
  collectCoverageFrom: [
    './**/*.ts?(x)',
    '!./vite.config.ts',
    '!./jest.config.ts',
    '!./vite-env.d.ts  ',
  ],
  collectCoverage: true,
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  transformIgnorePatterns: ['/node_modules/(?!@web3-storage/multipart-parser)'],
};
