import { Module } from "@nestjs/common";
import { FunctionSchemaModuleBase } from "./base/functionSchema.module.base";
import { FunctionSchemaService } from "./functionSchema.service";
import { FunctionSchemaController } from "./functionSchema.controller";
import { FunctionSchemaResolver } from "./functionSchema.resolver";

@Module({
  imports: [FunctionSchemaModuleBase],
  controllers: [FunctionSchemaController],
  providers: [FunctionSchemaService, FunctionSchemaResolver],
  exports: [FunctionSchemaService],
})
export class FunctionSchemaModule {}
