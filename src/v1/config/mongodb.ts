import { createConnection } from "typeorm";
import { TicketEntity } from "v1/api/ticket/entities/ticket";

const { NODE_ENV, MONGODB_URL } = process.env;

// eslint-disable-next-line @typescript-eslint/naming-convention
const notIsPrd = NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const connect = () =>
	createConnection({
		type: "mongodb",
		url: MONGODB_URL,
		synchronize: false,
		logging: notIsPrd,
		entities: [TicketEntity],
	});
