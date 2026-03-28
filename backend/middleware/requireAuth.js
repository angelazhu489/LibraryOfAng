import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js'

export const requireAuth = async (req, res, next) => {
  // check authorization header exists
  const authorization = req.get('Authorization')
  console.log(authorization)
  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }
  const token = authorization.split(" ")[1]
  try {
    // check for valid jwt
    const { _id } = jwt.verify(token, process.env.SECRET)
    // authenticate user with db
    const query = await User.findOne({ _id }).select('_id')
    console.log(query)
    // pass user property to next function
    req.user = query
    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Request is not authorized' })
  }
}