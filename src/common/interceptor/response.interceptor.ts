import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const response: Response = context.switchToHttp().getResponse();
    return next.handle().pipe(
      map((data) => ({
        success: true,
        statusCode: response.statusCode,
        msg: '',
        data: data === undefined ? [] : data,
      })),
    );
  }
}
