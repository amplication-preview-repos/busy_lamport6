import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FunctionSchemaServiceBase } from "./base/functionSchema.service.base";

@Injectable()
export class FunctionSchemaService extends FunctionSchemaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
