import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Contact from '#models/contact'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // Fetch all users from the database
    const users = await User.all()

    // Create an array to hold all contact data
    interface ContactData {
      userId: number
      contactId: number
      name: string
    }

    const contacts: ContactData[] = []

    // Generate 6 contacts for each user
    users.forEach((user, userIndex) => {
      for (let i = 0; i < 6; i++) {
        contacts.push({
          userId: user.id,
          contactId:
            (userIndex + i + 1) % users.length === 0
              ? users[0].id
              : users[(userIndex + i + 1) % users.length].id, // Logic to cycle through users
          name: `Contact ${i + 1} for ${user.name}`,
        })
      }
    })

    // Insert contacts into the database
    await Contact.createMany(contacts)
  }
}
