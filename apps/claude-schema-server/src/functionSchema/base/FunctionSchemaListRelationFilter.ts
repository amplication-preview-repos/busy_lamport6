/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FunctionSchemaWhereInput } from "./FunctionSchemaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FunctionSchemaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FunctionSchemaWhereInput,
  })
  @ValidateNested()
  @Type(() => FunctionSchemaWhereInput)
  @IsOptional()
  @Field(() => FunctionSchemaWhereInput, {
    nullable: true,
  })
  every?: FunctionSchemaWhereInput;

  @ApiProperty({
    required: false,
    type: () => FunctionSchemaWhereInput,
  })
  @ValidateNested()
  @Type(() => FunctionSchemaWhereInput)
  @IsOptional()
  @Field(() => FunctionSchemaWhereInput, {
    nullable: true,
  })
  some?: FunctionSchemaWhereInput;

  @ApiProperty({
    required: false,
    type: () => FunctionSchemaWhereInput,
  })
  @ValidateNested()
  @Type(() => FunctionSchemaWhereInput)
  @IsOptional()
  @Field(() => FunctionSchemaWhereInput, {
    nullable: true,
  })
  none?: FunctionSchemaWhereInput;
}
export { FunctionSchemaListRelationFilter as FunctionSchemaListRelationFilter };
