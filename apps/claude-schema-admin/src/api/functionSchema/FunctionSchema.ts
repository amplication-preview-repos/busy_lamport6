import { JsonValue } from "type-fest";

export type FunctionSchema = {
  arguments: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  outputType: string | null;
  requiredArguments: JsonValue;
  updatedAt: Date;
};
