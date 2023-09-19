export class AppException extends Error {
  private _errors: string[];
  private _message: string;

  constructor(message: string, errors: string[] = []) {
    super(message);
    this._message = message;
    this._errors = errors;
  }

  public get errors(): string[] {
    return this._errors;
  }

  public get message(): string {
    return this._message;
  }
}
