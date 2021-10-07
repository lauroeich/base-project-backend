import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectID } from "mongodb";
import { TicketTypeEnum } from "../../../types/enums/ticket-types";

@Entity()
export class TicketEntity {
	@ObjectIdColumn({
		name: "_id",
	})
	public id: ObjectID;

	@Column()
	public code: string;

	@Column()
	public name: string;

	@Column()
	public description: string;

	@Column()
	public type: TicketTypeEnum;

	@Column()
	public discountValue: number;

	@Column()
	public expirationDate: string;

	@Column({
		default: true,
	})
	public isValid: boolean;
}
