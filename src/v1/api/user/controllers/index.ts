import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { loginController } from "v1/api/user/login/login.controller";

// eslint-disable-next-line require-await
const userController: FastifyPluginAsync = async fastifyInstancePlugin => {
	fastifyInstancePlugin.post("/login", loginController);
};

export const setUserController = (fastify: FastifyInstance) =>
	fastify.register(userController, {
		prefix: "/user",
	});
