import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialModule } from './material/material.module';
import { AgentModule } from './agent/agent.module';
import { ArmsModule } from './arms/arms.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { ProtectModule } from './protect/protect.module';

@Module({
  imports: [
    MaterialModule,
    AgentModule,
    ArmsModule,
    AccessoriesModule,
    ProtectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
