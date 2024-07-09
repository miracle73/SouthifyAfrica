import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
	{
		email: { type: String, require: true, unique: true },
		name: { type: String, require: true },
		phone: { type: String, require: true },
		need: { type: String, require: true },
		favFeature: { type: String, require: true },
		: { type: String, require: true },
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model('User', userSchema)

export default User