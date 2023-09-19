import { randomUUID } from 'crypto';
import { MessageEntity } from './MessageEntity';
import { InvalidPropException } from 'src/core/_shared/exceptions/InvalidPropException';

describe('MessageEntity', () => {
  it('should be created', () => {
    const message = new MessageEntity({
      content: 'message sended',
      receiverId: randomUUID(),
      senderId: randomUUID(),
    });

    expect(message).toBeDefined();
    expect(message.id).toBeDefined();
    expect(message.content).toBe('message sended');
    expect(message.senderId).toBeDefined();
  });

  it('should be received not is valid', () => {
    expect(() => {
      new MessageEntity({
        content: 'message sended',
        receiverId: 'invalid-uuid',
        senderId: randomUUID(),
      });
    }).toThrowError(InvalidPropException);
  });

  it('should be sended not is valid', () => {
    expect(() => {
      new MessageEntity({
        content: 'message sended',
        receiverId: randomUUID(),
        senderId: 'invalid-uuid',
      });
    }).toThrowError(InvalidPropException);
  });

  it('should be content not is valid', () => {
    expect(() => {
      new MessageEntity({
        content: '',
        receiverId: randomUUID(),
        senderId: randomUUID(),
      });
    }).toThrowError(InvalidPropException);
  });
});
