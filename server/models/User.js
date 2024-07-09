import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
	{
		email: { type: String, require: true, unique: false },
		email: { type: String, require: true, unique: false }
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model('User', userSchema)

export default User