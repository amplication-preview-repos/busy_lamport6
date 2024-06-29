import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FunctionSchemaCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="outputType" source="outputType" />
        <div />
      </SimpleForm>
    </Create>
  );
};
