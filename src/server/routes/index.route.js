import express from 'express'
import userRoutes from './user/user.route'
import authRoutes from './auth/auth.route'
import companyRoutes from './company/company.route'

const routePrefix = '/api/v1'
const router = express.Router() // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get(routePrefix + '/health-check', (req, res) => res.send({ healthCheck: new Date().toJSON() }))

// define api routes
router.use(routePrefix + '/users', userRoutes)
router.use(routePrefix + '/auth', authRoutes)
router.use(routePrefix + '/company', companyRoutes)

export default router
