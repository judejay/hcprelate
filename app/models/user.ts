import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare password: string
  @column()
  declare role: string
  @column()
  declare isActive: boolean
  @column()
  declare profilePicture: string
  @column()
  declare bio: string
  @column()
  declare lastLogin: DateTime
}
