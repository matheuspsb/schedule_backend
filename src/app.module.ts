/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatasModule } from './datas/datas.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    HttpModule,
    DatasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
