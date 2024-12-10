import { Injectable } from '@nestjs/common';
import { agents } from './json/agents';
import { agents2 } from './json/agents2';

@Injectable()
export class AgentService {
  getAgents = async (version: string): Promise<any> => {
    switch (version) {
      case '2':
        return agents2;
      default:
        break;
    }
    return agents;
  };
}
