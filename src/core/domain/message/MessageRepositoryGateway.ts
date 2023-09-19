import { Repository } from '../../_shared/Repository';
import { MessageEntity } from './MessageEntity';

export interface MessageRepositoryGateway extends Repository<MessageEntity> {}
