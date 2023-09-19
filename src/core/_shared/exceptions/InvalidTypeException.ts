import { AppException } from '../AppException';

export class InvalidTypeException extends AppException {
  constructor(errors: string[] = []) {
    super('invalid type exception', errors);
  }
}
