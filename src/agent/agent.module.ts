import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';

@Module({
  controllers: [AgentController],
  providers: [AgentService],
})
export class AgentModule {}
