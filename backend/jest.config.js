/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('node:path');
const { config } = require('dotenv');
config();

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	setupFiles: ['dotenv/config'],
	moduleNameMapper: {
		'^@database': resolve('./src/database/index'),
		'^@middlewares/(.*)$': resolve(__dirname, './src/middlewares/$1'),
		'^@utils/(.*)$': resolve(__dirname, './src/utils/$1'),
		'^@dtos/(.*)$': resolve(__dirname, './src/dtos/$1'),
		'^@config/(.*)$': resolve(__dirname, './src/config/$1'),
		'^@app': resolve(__dirname, './src/app'),
	},
	modulePaths: ['<rootDir>/src'],
	rootDir: '.',
	testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
};
