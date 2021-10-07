import { Route } from "v1/types/route";
import { login } from "../../services/login";

export const loginController: Route = (request, reply) => {
	let result;

	try {
		result = login(undefined, {
			email: (request.body as any).email,
			password: (request.body as any).password,
		});
	} catch (err: any) {
		reply.status(404).send({
			error: err.message,
		});
	}
	reply.send(result);
};
