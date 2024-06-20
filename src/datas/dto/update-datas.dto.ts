import { PartialType } from '@nestjs/swagger';
import { CreateDatasDto } from './create-datas.dto';

export class UpdateDatasDto extends PartialType(CreateDatasDto) {}
