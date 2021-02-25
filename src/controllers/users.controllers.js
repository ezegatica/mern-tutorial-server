const usersCtrl = {};
const User = require('../models/User')

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

usersCtrl.createUser = async (req, res) => {
    const {username} = req.body
    const newUser = new User({username: username})
    await newUser.save()
    res.json({message: 'User guardado!'})
}

usersCtrl.deleteUser = async (req, res) => {
    const id = req.params.id
    await User.findOneAndDelete (id)
    res.json({message: 'User eliminado!'})
}

module.exports = usersCtrl; 