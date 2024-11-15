import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialModule } from './material/material.module';
import { AgentModule } from './agent/agent.module';
import { ArmsModule } from './arms/arms.module';
import { AccessoriesModule } from './accessories/accessories.module';
import { ProtectModule } from './protect/protect.module';
import { PropsModule } from './props/props.module';

@Module({
  imports: [
    AgentModule,
    ArmsModule,
    AccessoriesModule,
    MaterialModule,
    ProtectModule,
    PropsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
