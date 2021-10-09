import Fastify from "fastify";
import { setUserController } from "./v1/api/user/controllers/index";
import { connect } from "./v1/config/mongodb";
import "reflect-metadata";

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
