import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialModule } from './material/material.module';
import { AgentModule } from './agent/agent.module';

@Module({
  imports: [MaterialModule, AgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
