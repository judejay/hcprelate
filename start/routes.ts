const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home')
router.on('/about').renderInertia('about')
router.on('/contact').renderInertia('contact')
router.get('/users', [UsersController, 'index'])
router.on('/users/create').renderInertia('users/create')
router.get('/users/:id', [UsersController, 'show'])
router.on('/users/S:id/edit').renderInertia('users/edit')
