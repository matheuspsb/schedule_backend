import { database, repositories } from '@/settings/constants'
import { DataSource } from 'typeorm'
import { DatasEntity } from './datas.entity'

export const datasProviders = [
  {
    provide: repositories.datas,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DatasEntity),
    inject: [database.data_source],
  },
]
