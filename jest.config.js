module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'clover'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    globals: {
        'ts-jest': {
            extends: './babel.config.js',
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    notify: true,
    notifyMode: 'always',
    roots: ['<rootDir>packages'],
    testMatch: ['**/test/*.+(ts|tsx|js)', '**/*.spec.+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
