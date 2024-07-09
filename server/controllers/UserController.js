import asyncHandler from 'express-async-handler'
import { generatetoken } from '../utilities/generate_token.js'
import bcrypt from 'bcryptjs'
import cloudinary from '../config/cloudinary.js'
import User from '../models/User.js'

export const user_signup = asyncHandler(async (req, res, next) => {
    try {
        const {
            email,
            name,
            phone,
            need,
            favFeature,
            awarenessMedium,
            country,
            age,
            subscribe
        } = req.body


        const userExists = await User.find({ email })

        if (userExists.length > 0) {
            throw new Error('Sorry, this user already exists')
        }

        const user = await User.create({ 
            email,
            name,
            phone,
            need,
            favFeature,
            awarenessMedium,
            country,
            age,
            subscribe,
         })

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