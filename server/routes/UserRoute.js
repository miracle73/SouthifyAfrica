import express from 'express'
import * as UserValidation from "../Validations/adminValidation.js"
import { user_signup } from '../controllers/UserController.js'

const router = express.Router()

router.route('/')
    .post(UserValidation.wait, user_signup)

export default router