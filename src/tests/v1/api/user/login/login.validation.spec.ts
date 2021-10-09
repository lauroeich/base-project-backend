import { StatusCodeEnum } from "v1/enum/status-code";
import { CustomError } from "./../../../../../v1/utils/error";
import { validation } from "./../../../../../v1/api/user/login/login.validation";

describe("login validation", () => {
	const validEmail = "test@tes2t.com";
	const validPassword = "ad56s4d96sa4";

	describe("Successful", () => {
		it("should return a authCode if the validates params are correct", async () => {
			let result: any;

			try {
				result = await validation({
					email: validEmail,
					password: validPassword,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result).toStrictEqual({
				email: validEmail,
				password: validPassword,
			});
		});
	});

	describe("Invalid params", () => {
		it("should throw a customError with a Invalid Email message", async () => {
			let result: any;

			try {
				result = await validation({
					email: "das31s3f1a",
					password: validPassword,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result instanceof CustomError).toBeTruthy();
			expect(result.message).toBe("email must be a valid email");
			expect(result.statusCode).toBe(StatusCodeEnum.BAD_REQUEST);
		});
	});

	describe("Invalid type", () => {
		it("should throw a customError with a Invalid Email type", async () => {
			let result: any;

			try {
				result = await validation({
					email: 123412 as any,
					password: validPassword,
				});
			} catch (err: any) {
				result = err;
			}

			expect(result instanceof CustomError).toBeTruthy();
			expect(result.message).toBe(
				"email must be a `string` type, but the final value was: `123412`.",
			);
			expect(result.statusCode).toBe(StatusCodeEnum.BAD_REQUEST);
		});
	});

	it("should throw a customError with a Invalid password type", async () => {
		let result: any;

		try {
			result = await validation({
				email: validEmail,
				password: 21313 as any,
			});
		} catch (err: any) {
			result = err;
		}

		expect(result instanceof CustomError).toBeTruthy();
		expect(result.message).toBe(
			"password must be a `string` type, but the final value was: `21313`.",
		);
		expect(result.statusCode).toBe(StatusCodeEnum.BAD_REQUEST);
	});
});
