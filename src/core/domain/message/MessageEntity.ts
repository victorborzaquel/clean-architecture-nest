import { randomUUID } from 'crypto';
import { Validate } from '../../_shared/Validate';

interface MessageEntityProps {
  id?: string;
  content: string;
  senderId: string;
  receiverId: string;
  createdAt?: Date;
}

export class MessageEntity {
  private _id: string;
  private _content: string;
  private _senderId: string;
  private _receiverId: string;
  private _createdAt: Date;

  constructor(props: MessageEntityProps) {
    this._id = props.id || randomUUID();
    this._content = props.content;
    this._senderId = props.senderId;
    this._receiverId = props.receiverId;
    this._createdAt = new Date();
    this.validate();
  }

  private validate() {
    Validate.of(this._id, 'id')
      .isUUID()
      .and(this._content, 'content')
      .isNotEmpty()
      .maxLength(255)
      .and(this._senderId, 'senderId')
      .isUUID()
      .and(this._receiverId, 'receiverId')
      .isUUID()
      .and(this._createdAt, 'createdAt')
      .isNotEmpty()
      .throwsException();
  }

  public get id(): string {
    return this._id;
  }

  public get content(): string {
    return this._content;
  }

  public get senderId(): string {
    return this._senderId;
  }

  public get receiverId(): string {
    return this._receiverId;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }
}
