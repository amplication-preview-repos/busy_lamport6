import { FunctionSchema as TFunctionSchema } from "../api/functionSchema/FunctionSchema";

export const FUNCTIONSCHEMA_TITLE_FIELD = "name";

export const FunctionSchemaTitle = (record: TFunctionSchema): string => {
  return record.name?.toString() || String(record.id);
};
