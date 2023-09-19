export class CreateMessageRequest {
  readonly content: string;
  readonly senderId: string;
  readonly receiverId: string;

  constructor(props: CreateMessageRequest) {
    this.content = props.content;
    this.senderId = props.senderId;
    this.receiverId = props.receiverId;
  }

  public static create(props: CreateMessageRequest): CreateMessageRequest {
    return new CreateMessageRequest(props);
  }
}
