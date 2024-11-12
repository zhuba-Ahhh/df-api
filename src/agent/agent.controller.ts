import { Controller, Get } from '@nestjs/common';
import { AgentService } from './agent.service';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}
  @Get('getAgents')
  async getAgents() {
    const data = await this.agentService.getAgents();
    return { code: 1, data }; // 封装返回格式
  }
}
