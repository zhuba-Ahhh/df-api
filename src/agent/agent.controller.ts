import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { AgentService } from './agent.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AgentsResponsePostDtoArray } from './dto/agents';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}
  @ApiOperation({ summary: '干员', description: '获取干员角色信息' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '成功',
    type: AgentsResponsePostDtoArray,
  })
  @Get('getAgents')
  async getAgents(@Query('version') version: string) {
    const data = await this.agentService.getAgents(version);
    return { code: 1, data }; // 封装返回格式
  }
}
