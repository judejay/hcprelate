import { BaseSeeder } from '@adonisjs/lucid/seeders'
//import Database from '@ioc:Adonis/Lucid/Database'
import User from '#models/user'
export default class extends BaseSeeder {
  async run() {
    const numberOfUsers = 10

    // Create an array of user data
    const users = Array.from({ length: numberOfUsers }, (_, index) => ({
      name: `User ${index + 1}`,
      email: `user${index + 1 + 'email.com'}`,
      friends: '2',
    }))

    await User.createMany(users)
    // Write your database queries inside the run method
  }
}
