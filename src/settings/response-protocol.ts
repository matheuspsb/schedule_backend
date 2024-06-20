import { IResponse } from './interfaces/iresponse'

export class ResponseProtocol implements IResponse {
  statusCode: number
  message: any
  error?: string

  constructor(_status: number, _message: any, _error?: string) {
    this.statusCode = _status
    this.message = _message
    this.error = !_error ? null : _error
  }
}
