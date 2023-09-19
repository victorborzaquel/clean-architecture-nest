import { MessageMapper } from 'src/core/domain/message/MessageMapper';
import { MessageRepositoryGateway } from 'src/core/domain/message/MessageRepositoryGateway';
import { CreateMessageRequest } from 'src/core/domain/message/payload/request/CreateMessageRequest';
import { MessageResponse } from 'src/core/domain/message/payload/response/MessageResponse';
import { CreateMessageUseCase } from 'src/core/domain/message/usecases/CreateMessageUseCase';

export class CreateMessageUseCaseImpl implements CreateMessageUseCase {
  constructor(private readonly messageRepository: MessageRepositoryGateway) {}

  async execute(request: CreateMessageRequest): Promise<MessageResponse> {
    const entity = MessageMapper.toEntity(request);

    this.messageRepository.save(entity);

    return MessageMapper.toResponse(entity);
  }
}
