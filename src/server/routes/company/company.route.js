import express from 'express'
import validate from 'express-validation'
import companyCtrl from '../../controllers/company.controller'

const router = express.Router()

router.route('/')

router
  .route('/')
  .get(companyCtrl.get)

export default router
