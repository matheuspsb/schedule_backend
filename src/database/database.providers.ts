import { database } from '@/settings/constants'
import { DataSource } from 'typeorm'


export const databaseProviders = [
  {
    provide: database.data_source,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: Boolean(process.env.IS_DEVELOPMENT),
      })

      return dataSource.initialize()
    },
  },
]
