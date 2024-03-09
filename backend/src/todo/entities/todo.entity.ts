import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  text: string;

  @Field()
  owner: string; // ID of the owner from appwrite users manegement system
}
