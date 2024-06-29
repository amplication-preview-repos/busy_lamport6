import * as graphql from "@nestjs/graphql";
import { FunctionSchemaResolverBase } from "./base/functionSchema.resolver.base";
import { FunctionSchema } from "./base/FunctionSchema";
import { FunctionSchemaService } from "./functionSchema.service";

@graphql.Resolver(() => FunctionSchema)
export class FunctionSchemaResolver extends FunctionSchemaResolverBase {
  constructor(protected readonly service: FunctionSchemaService) {
    super(service);
  }
}
