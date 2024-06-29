import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FunctionSchemaWhereInput = {
  arguments?: JsonFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  outputType?: StringNullableFilter;
  requiredArguments?: JsonFilter;
};
