export class BadRequestException extends Error {
  // Add a closing curly brace
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestException';
  }
}
