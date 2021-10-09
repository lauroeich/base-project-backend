/* eslint-disable capitalized-comments */
/* eslint-disable multiline-comment-style */
module.exports = {
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: "src",
	testRegex: ".*\\.spec\\.ts$",
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	collectCoverageFrom: ["**/*.ts", "!tests/**/*.ts", "!v*/api/**/*.entity.ts"],
	setupFiles: ["./tests/setup.ts"],
	coverageDirectory: "../coverage",
	testEnvironment: "node",
	moduleDirectories: ["node_modules", "src"],
	resetMocks: true,
	coverageThreshold: {
		global: {
			// statements: 99.87,
			// branches: 99.69,
			// functions: 100,
			// lines: 100,
		},
	},
};
