// import { z } from "zod";

// export const extendedServicesSchema = z.record(
// 	z.function()
// 		.args(z.any().array())
// 		.returns(z.promise(z.unknown()))
// );

// export type ExtendedServices = z.infer<typeof extendedServicesSchema>;


export type ExtendedServices = {
	[key: string]: (...args: any[]) => Promise<unknown>;
};
