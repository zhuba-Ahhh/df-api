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

@Module({
  imports: [
    ScheduleModule.forRoot(),
    AgentModule,
    ArmsModule,
    AccessoriesModule,
    ConfigModule,
    MaterialModule,
    ProtectModule,
    PropsModule,
    InfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
