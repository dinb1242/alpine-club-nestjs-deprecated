import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Injectable,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const response = host.switchToHttp().getResponse();
    const statusCode = exception.getStatus();
    const message = exception.message;

    return response.status(statusCode).json({
      success: false,
      statusCode: statusCode,
      msg: message,
      data: [],
    });
  }
}
