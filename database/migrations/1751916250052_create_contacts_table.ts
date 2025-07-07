import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contacts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users') // Foreign key
      table.integer('contact_id').unsigned().references('id').inTable('users') // Foreign key
      // Ensure that contact_id is unique for each user_id
      table.unique(['user_id', 'contact_id'], 'unique_user_contact_pair')
      // Add any additional fields you need for the contact
      table.string('name', 255).notNullable()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
