export class MessageResponse {
  readonly id: string;
  readonly content: string;
  readonly senderId: string;
  readonly receiverId: string;
  readonly createdAt: Date;

  constructor(props: MessageResponse) {
    this.id = props.id;
    this.content = props.content;
    this.senderId = props.senderId;
    this.receiverId = props.receiverId;
    this.createdAt = props.createdAt;
  }

  public static create(props: MessageResponse): MessageResponse {
    return new MessageResponse(props);
  }
}
