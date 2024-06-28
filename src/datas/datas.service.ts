/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { CreateDatasDto } from './dto/create-datas.dto'
import { UpdateDatasDto } from './dto/update-datas.dto'
import { DatasEntity } from './entities/datas.entity'
import { repositories } from 'settings/constants'

@Injectable()
export class DatasService {
  constructor(
    @Inject(repositories.datas)
    private repository: Repository<DatasEntity>,
  ) { }

  async create(createDatasDto: CreateDatasDto): Promise<any> {
    return await this.repository.insert(createDatasDto)
  }

  async findAll(): Promise<DatasEntity[]> {
    return this.repository.find()
  }

  async findOne(id: string): Promise<any> {
    return this.repository.findOne({
      where: [{ id: id }],
    })
  }

  async update(id: string, updateDatasDto: UpdateDatasDto): Promise<any> {
    return await this.repository.update(id, updateDatasDto)
  }

  async remove(id: string) {
    return await this.repository.delete(id)
  }

  async queryBuilder(alias: string): Promise<any> {
    return this.repository.createQueryBuilder(alias)
  }
}
