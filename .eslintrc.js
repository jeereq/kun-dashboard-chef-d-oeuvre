export default {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 13,
	},
	rules: {
		'no-undef': 'warn',
		'no-unused-vars': 'warn',
	},
};
