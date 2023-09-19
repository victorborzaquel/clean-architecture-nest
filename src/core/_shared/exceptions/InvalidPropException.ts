import { AppException } from '../AppException';

export class InvalidPropException extends AppException {
  constructor(errors: string[] = []) {
    super('invalid prop exception', errors);
  }
}
