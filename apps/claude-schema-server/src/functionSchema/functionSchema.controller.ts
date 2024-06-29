import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FunctionSchemaService } from "./functionSchema.service";
import { FunctionSchemaControllerBase } from "./base/functionSchema.controller.base";

@swagger.ApiTags("functionSchemas")
@common.Controller("functionSchemas")
export class FunctionSchemaController extends FunctionSchemaControllerBase {
  constructor(protected readonly service: FunctionSchemaService) {
    super(service);
  }
}
