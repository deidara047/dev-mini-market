import { InputType, Field } from '@nestjs/graphql';
import { FileUpload } from 'src/fileupload/FileUpload';

@InputType()
export class CreateTodoInput {
  @Field()
  text: string;

  @Field()
  title: string;

  @Field()
  owner: string; 
}
