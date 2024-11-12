import { Injectable } from '@nestjs/common';
import { agents } from './json/agents';

@Injectable()
export class AgentService {
  getAgents = async (): Promise<any> => {
    return agents;
  };
}
