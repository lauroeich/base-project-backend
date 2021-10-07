import Fastify from "fastify";
import "reflect-metadata";
import { setUserController } from "v1/api/user/controllers";
import { connect } from "./v1/config/mongodb";

const PORT = 3000;

const server = async () => {
	if (process.env.NODE_ENV !== "production") {
		const { config } = await import("dotenv");

		config();
	}

	const fastify = Fastify({
		logger: true,
	});

	connect();

	setUserController(fastify);

	fastify.listen(PORT, err => {
		if (err) throw err;
	});
};

server();
