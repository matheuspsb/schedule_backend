import { database } from '@/settings/constants'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity(database.tables.datas)
export class DatasEntity {
  @PrimaryGeneratedColumn('uuid', { name: `id` })
  id?: string

  @Column('text', { name: `title`})
  title: string

  @Column('text', { name: `description`})
  description: string

  @Column('text', { name: `label`})
  label?: string

  @Column('text', { name: `day`})
  day?: string
}
