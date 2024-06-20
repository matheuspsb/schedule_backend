import { ApiProperty } from '@nestjs/swagger'

export class CreateDatasDto {

  @ApiProperty({ description: 'title', example: '123456' })
  title: string

  @ApiProperty({ description: 'description', example: 'description for the schedule' })
  description: string

  @ApiProperty({ description: 'label', example: 'indigo' })
  label: string

  @ApiProperty({ description: 'day', example: 'indigo' })
  day: string
}
