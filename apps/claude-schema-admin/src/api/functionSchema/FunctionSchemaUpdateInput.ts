import { InputJsonValue } from "../../types";

export type FunctionSchemaUpdateInput = {
  arguments?: InputJsonValue;
  description?: string | null;
  name?: string | null;
  outputType?: string | null;
  requiredArguments?: InputJsonValue;
};
