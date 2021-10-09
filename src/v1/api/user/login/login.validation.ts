import { StatusCodeEnum } from "v1/enum/status-code";
import * as yup from "yup";
import { CustomError } from "./../../../utils/error";
import { LoginParams } from "./login.service";

const schema = yup.object().shape({
	email: yup.string().strict().required().email(),
	password: yup.string().strict().required(),
});

export const validation = (params: LoginParams) =>
	schema.validate(params).catch(err => {
		throw new CustomError(err.errors.join("\n"), StatusCodeEnum.BAD_REQUEST);
	});
