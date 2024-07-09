import asyncHandler from 'express-async-handler'
import { generatetoken } from '../utilities/generate_token.js'
import bcrypt from 'bcryptjs'
import cloudinary from '../config/cloudinary.js'
import User from '../models/User.js'

export const user_signup = asyncHandler(async (req, res, next) => {
    try {
        const {
            email,
            name: { type: String, require: true },
		phone: { type: String, require: true },
		need: { type: String, require: true },
		favFeature: { type: String, require: true },
		awarenessMedium: { type: String, require: true },
		country: { type: String, require: true },
		age: { type: String, require: true },
		subscribe: { type: Boolean, require: true },
        } = req.body


        const userExists = await User.find({ email })

        if (userExists.length > 0) {
            throw new Error('Sorry, this user already exists')
        }

        const user = await User.create({ email })

        if (user) {
            res.status(201).json({
                message: 'user has been registered successfully',
                status: 'ok',
                data: user,
            })
        } else {
            res.status(400)
            throw new Error('Invalid data provided.')
        }
    } catch (error) {
        next(error);
    }
})