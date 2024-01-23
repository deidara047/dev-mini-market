import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  text: string;

  @Field({nullable: true})
  imageUrl?: string;

  @Field()
  owner: string; // ID of the owner from appwrite users manegement system
}
