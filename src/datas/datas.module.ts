/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { DatabaseModule } from 'database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { datasProviders } from './entities/datas.providers';
import { DatasService } from './datas.service';
import { DatasController } from './datas.controller';

@Module({
  controllers: [DatasController],
  imports: [DatabaseModule, JwtModule],
  providers: [
    ...datasProviders,
    DatasService,
  ],
  exports: [DatasService]
})
export class DatasModule { }
