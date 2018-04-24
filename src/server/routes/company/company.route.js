import express from 'express'
import validate from 'express-validation'
import companyCtrl from '../../controllers/company.controller'

const router = express.Router()

router.route('/').get(companyCtrl.list)

router.route('/:companyId').get(companyCtrl.load)

// router
//     .route('/create')
//     .post(companyCtrl.create)

export default router
