type Injectables = undefined;

export interface LoginParams {
	email: string;
	password: string;
}

export const login = (
	_injectables: Injectables,
	{ email, password }: LoginParams,
) => {
	if (email !== "test@test.com") {
		throw new Error("Invalid email");
	}
	if (password !== "123") {
		throw new Error("Invalid password");
	}

	return {
		authCode: "foo",
	};
};
