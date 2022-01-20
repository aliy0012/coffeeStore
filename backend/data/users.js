import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 6),
    isAdmin: true,
  },
  {
    name: 'Ali Aliyev',
    email: 'ali@example.com',
    password: bcrypt.hashSync('123456', 6),
  },
  {
    name: 'Gul Yildiz',
    email: 'gul@example.com',
    password: bcrypt.hashSync('123456', 6),
  },
]

export default users