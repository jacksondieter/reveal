import { Router } from 'express'
import {apiController, getSecret, createSecret} from './controllers'

const router = Router()

// /api/
router
  .route('/')
  .get(apiController)
  .post(createSecret)

// /api/:id
router
  .route('/:id')
  .get(getSecret)

export default router
