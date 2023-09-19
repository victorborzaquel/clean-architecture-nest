import { UseCase } from '../../../_shared/UseCase';
import { CreateMessageRequest } from '../payload/request/CreateMessageRequest';
import { MessageResponse } from '../payload/response/MessageResponse';

export interface CreateMessageUseCase
  extends UseCase<CreateMessageRequest, MessageResponse> {}
