import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    // This method should return a list of users
    // For example, you might fetch users from a database
    // and return them to the view.
    // Example:
    const users = await User.query().orderBy('created_at', 'desc')
    console.log(users)
    // return view.render('users.index', { users })
    // For now, we will return a placeholder message
    // In a real application, you would return the users to the view.
    return inertia.render('users/index', { users }) // return { message: 'List of users will be displayed here.' }
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ inertia, params }: HttpContext) {
    // Fetch the user by ID from the database
    const user = await User.findOrFail(params.id)
    // Render the user details page with the fetched user data
    return inertia.render('users/show', { user })
    // return { message: `Showing details for user with ID ${params.id}` }
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  /**async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
