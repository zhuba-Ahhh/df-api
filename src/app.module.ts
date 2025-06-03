import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialModule } from './material/material.module';
import { AgentModule } from './agent/agent.module';
import { ArmsModule } from './arms/arms.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { ProtectModule } from './protect/protect.module';
import { PropsModule } from './props/props.module';
import { ConfigModule } from './config/config.module';
import { InfoModule } from './info/info.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { WeekModule } from './week/week.module';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as fs from 'fs';
import * as path from 'path';
import { LoggerService } from './config/logger.config';

const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// 新增日志拦截器
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  // 注入自定义日志服务
  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const now = Date.now();

    // 使用自定义服务记录请求信息（控制台+文件）
    this.logger.log(
      `请求接收 - 路径: ${req.path}, 方法: ${req.method}`,
      LoggingInterceptor.name,
    );

    return next.handle().pipe(
      tap((res) => {
        const duration = Date.now() - now;
        const resObj = context.switchToHttp().getResponse();
        // 使用自定义服务记录响应信息（控制台+文件）
        this.logger.log(
          `响应返回 - 状态码: ${resObj.statusCode}, 耗时: ${duration}ms, 内容: ${JSON.stringify(res)}`,
          LoggingInterceptor.name,
        );
      }),
    );
  }
}

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local'],
    }),
    ScheduleModule.forRoot(),
    AgentModule,
    ArmsModule,
    AccessoriesModule,
    ConfigModule,
    MaterialModule,
    ProtectModule,
    PropsModule,
    InfoModule,
    WeekModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    LoggerService, // 新增：注册自定义日志服务
    { provide: 'APP_INTERCEPTOR', useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
