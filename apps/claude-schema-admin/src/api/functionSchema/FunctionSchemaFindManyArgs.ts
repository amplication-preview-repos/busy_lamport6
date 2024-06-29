import { FunctionSchemaWhereInput } from "./FunctionSchemaWhereInput";
import { FunctionSchemaOrderByInput } from "./FunctionSchemaOrderByInput";

export type FunctionSchemaFindManyArgs = {
  where?: FunctionSchemaWhereInput;
  orderBy?: Array<FunctionSchemaOrderByInput>;
  skip?: number;
  take?: number;
};
