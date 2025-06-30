/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

router.on('/about').renderInertia('about')
router.on('/contact').renderInertia('contact')
router.on('/users').renderInertia('users/index')
router.on('/users/create').renderInertia('users/create')
router.on('/users/:id').renderInertia('users/show')
router.on('/users/:id/edit').renderInertia('users/edit')
