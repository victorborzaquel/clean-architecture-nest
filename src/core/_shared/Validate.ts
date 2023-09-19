import { InvalidPropException } from './exceptions/InvalidPropException';
import { InvalidTypeException } from './exceptions/InvalidTypeException';

export class Validate<T> {
  private _errors: string[];
  private _prop: T;
  private _propName: string;

  private constructor(prop: T, propName: string, errors: string[] = []) {
    this._prop = prop;
    this._propName = propName;
    this._errors = errors;
  }

  public static of<T>(prop: T, propName: string): Validate<T> {
    return new Validate<T>(prop, propName);
  }

  public and<N>(prop: N, propName: string): Validate<N> {
    return new Validate<N>(prop, propName, this._errors);
  }

  private getString(): string {
    if (typeof this._prop !== 'string') {
      throw new InvalidTypeException([`${this._propName} is not a string`]);
    }

    return this._prop as string;
  }

  private getNumber(): number {
    if (typeof this._prop !== 'number') {
      throw new InvalidTypeException([`${this._propName} is not a number`]);
    }

    return this._prop as number;
  }

  public throwsException(): void {
    if (this._errors.length > 0) {
      throw new InvalidPropException(this._errors);
    }
  }

  public get(): T {
    this.throwsException();

    return this._prop;
  }

  public isRequired(): Validate<T> {
    if (!this._prop) {
      this._errors.push(`${this._propName} is required`);
    }

    return this;
  }

  public isNotEmpty(): Validate<T> {
    if (this._prop === '') {
      this._errors.push(`${this._propName} is empty`);
    }

    return this;
  }

  public isString(): Validate<T> {
    if (typeof this._prop !== 'string') {
      this._errors.push(`${this._propName} is not a string`);
    }

    return this;
  }

  public isNumber(): Validate<T> {
    if (typeof this._prop !== 'number') {
      this._errors.push(`${this._propName} is not a number`);
    }

    return this;
  }

  public isBoolean(): Validate<T> {
    if (typeof this._prop !== 'boolean') {
      this._errors.push(`${this._propName} is not a boolean`);
    }

    return this;
  }

  public isDate(): Validate<T> {
    if (!(this._prop instanceof Date)) {
      this._errors.push(`${this._propName} is not a date`);
    }

    return this;
  }

  public isObject(): Validate<T> {
    if (typeof this._prop !== 'object') {
      this._errors.push(`${this._propName} is not an object`);
    }

    return this;
  }

  public isArray(): Validate<T> {
    if (!Array.isArray(this._prop)) {
      this._errors.push(`${this._propName} is not an array`);
    }

    return this;
  }

  public isFunction(): Validate<T> {
    if (typeof this._prop !== 'function') {
      this._errors.push(`${this._propName} is not a function`);
    }

    return this;
  }

  public isEmail(): Validate<T> {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(this._prop as string)) {
      this._errors.push(`${this._propName} is not an email`);
    }

    return this;
  }

  public isPassword(): Validate<T> {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!passwordRegex.test(this._prop as string)) {
      this._errors.push(`${this._propName} is not a password`);
    }

    return this;
  }

  public isUUID(): Validate<T> {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

    if (!uuidRegex.test(this._prop as string)) {
      this._errors.push(`${this._propName} is not a uuid`);
    }

    return this;
  }

  public maxLength(length: number): Validate<T> {
    const string = this.getString();

    if (string.length > length) {
      this._errors.push(`${this._propName} is longer than ${length}`);
    }

    return this;
  }

  public minLength(length: number): Validate<T> {
    const string = this.getString();

    if (string.length > length) {
      this._errors.push(`${this._propName} is shorter than ${length}`);
    }

    return this;
  }

  public length(length: number): Validate<T> {
    const string = this.getString();

    if (string.length !== length) {
      this._errors.push(`${this._propName} is not ${length} characters long`);
    }

    return this;
  }

  public isGreaterThan(value: number): Validate<T> {
    const number = this.getNumber();

    if (number <= value) {
      this._errors.push(`${this._propName} is not greater than ${value}`);
    }

    return this;
  }

  public isGreaterOrEqualThan(value: number): Validate<T> {
    const number = this.getNumber();

    if (number < value) {
      this._errors.push(
        `${this._propName} is not greater or equal than ${value}`,
      );
    }

    return this;
  }

  public isLowerThan(value: number): Validate<T> {
    const number = this.getNumber();

    if (number >= value) {
      this._errors.push(`${this._propName} is not lower than ${value}`);
    }

    return this;
  }

  public isLowerOrEqualThan(value: number): Validate<T> {
    const number = this.getNumber();

    if (number > value) {
      this._errors.push(
        `${this._propName} is not lower or equal than ${value}`,
      );
    }

    return this;
  }

  public isBetween(min: number, max: number): Validate<T> {
    const number = this.getNumber();

    if (number < min || number > max) {
      this._errors.push(`${this._propName} is not between ${min} and ${max}`);
    }

    return this;
  }

  public isOneOf(values: T[]): Validate<T> {
    if (!values.includes(this._prop)) {
      this._errors.push(`${this._propName} is not one of ${values}`);
    }

    return this;
  }

  public isNotOneOf(values: T[]): Validate<T> {
    if (values.includes(this._prop)) {
      this._errors.push(`${this._propName} is one of ${values}`);
    }

    return this;
  }

  public isTrue(): Validate<T> {
    if (this._prop !== true) {
      this._errors.push(`${this._propName} is not true`);
    }

    return this;
  }

  public isFalse(): Validate<T> {
    if (this._prop !== false) {
      this._errors.push(`${this._propName} is not false`);
    }

    return this;
  }

  public isAfter(date: Date): Validate<T> {
    const dateProp = this._prop as Date;

    if (dateProp <= date) {
      this._errors.push(`${this._propName} is not after ${date}`);
    }

    return this;
  }

  public isBefore(date: Date): Validate<T> {
    const dateProp = this._prop as Date;

    if (dateProp >= date) {
      this._errors.push(`${this._propName} is not before ${date}`);
    }

    return this;
  }

  public isSame(date: Date): Validate<T> {
    const dateProp = this._prop as Date;

    if (dateProp.getTime() !== date.getTime()) {
      this._errors.push(`${this._propName} is not same as ${date}`);
    }

    return this;
  }

  public isNotSame(date: Date): Validate<T> {
    const dateProp = this._prop as Date;

    if (dateProp.getTime() === date.getTime()) {
      this._errors.push(`${this._propName} is same as ${date}`);
    }

    return this;
  }
}
