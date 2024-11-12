import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialModule } from './material/material.module';

@Module({
  imports: [MaterialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
