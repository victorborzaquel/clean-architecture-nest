import { MessageEntity } from './MessageEntity';
import { CreateMessageRequest } from './payload/request/CreateMessageRequest';
import { MessageResponse } from './payload/response/MessageResponse';

export class MessageMapper {
  private constructor() {}

  public static toEntity(request: CreateMessageRequest): MessageEntity {
    const { content, senderId, receiverId } = request;

    return new MessageEntity({ content, senderId, receiverId });
  }

  public static toResponse(entity: MessageEntity): MessageResponse {
    const { id, content, senderId, receiverId, createdAt } = entity;

    return MessageResponse.create({
      id,
      content,
      senderId,
      receiverId,
      createdAt,
    });
  }
}
