/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
  SetMetadata
} from '@nestjs/common';

import { DatasService } from './datas.service';
import { CreateDatasDto } from './dto/create-datas.dto';
import { UpdateDatasDto } from './dto/update-datas.dto';
import { database } from '@/settings/constants';
import { ResponseProtocol } from '@/settings/response-protocol';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('datas')
@Controller(database.tables.datas)
export class DatasController {
  constructor(private readonly datasService: DatasService) { }

  @Post()
  @ApiOperation({ summary: 'Criar Dados' })
  async create(@Body() body: CreateDatasDto): Promise<any> {
    try {
      let error: string

      await this.datasService.create(body)
      return new ResponseProtocol(200, `Dados cadastrados com sucesso!`)
    } catch (error) {
      throw new ResponseProtocol(405, error, error)
    }
  }

  @Get()
  @ApiOperation({ summary: 'Listar Dados' })
  async findAll() {
    try {
      let _datas = []
      const enc_datas = await this.datasService.findAll();
      return new ResponseProtocol(200, enc_datas)
    } catch (error) {
      throw new ResponseProtocol(404, 'Não conseguimos encontrar dados')
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza compromisso por id' })

  async update(@Param('id') id: string, @Body() UpdateDatasDto: UpdateDatasDto) {
    try {
      await this.datasService.update(id, UpdateDatasDto);
      return new ResponseProtocol(200, 'Informações atualizadas com sucesso')

    } catch (error) {
      throw new ResponseProtocol(400, 'Não foi possível editar o compromisso.')
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta compromisso por ID' })
  async remove(@Param('id') id: string) {
    try {
      await this.datasService.remove(id);
      return new ResponseProtocol(200, 'Conta apagada')
    } catch (error) {
      throw new ResponseProtocol(400, 'Não foi possível apagar este compromisso')
    }
  }
}
