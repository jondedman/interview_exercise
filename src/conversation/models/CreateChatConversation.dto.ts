import { ApiProperty } from '@nestjs/swagger';
import { Permission } from './Permission.dto';
import { Product, Context } from './ContextSchema.dto';

// as an enum, further tags can be added here
export enum TagType {
  subTopic = 'subTopic',
  //  add more tags here
  // mainTopic = 'mainTopic',
  // question = 'question',
}

export class Tag {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ enum: TagType })
  type: TagType;
}

export class CreateChatConversationDto {
  @ApiProperty()
  product: Product;

  @ApiProperty({ type: [Context] })
  context: Context[];

  @ApiProperty({ type: [Permission], required: false, default: [] })
  permissions?: Permission[];

  @ApiProperty({ type: [Tag], required: false })
  tags?: Tag[];

  @ApiProperty({ type: [String], required: false })
  memberIds?: string[];

  @ApiProperty({ type: [String], required: false })
  blockedMemberIds?: string[];
}
