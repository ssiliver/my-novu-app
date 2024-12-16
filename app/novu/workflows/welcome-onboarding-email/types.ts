import { z } from "zod";
import { payloadSchema, emailControlSchema, lmsPayloadSchema } from "./schemas";

export type PayloadSchema = z.infer<typeof payloadSchema>;
export type ControlSchema = z.infer<typeof emailControlSchema>;
export type LMSPayloadSchema = z.infer<typeof lmsPayloadSchema>;