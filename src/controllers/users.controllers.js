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
    console.log('deleting ', req.params.id);
    const id = req.params.id
    await User.findByIdAndDelete (id)
    res.json({message: 'User eliminado!'})
}

module.exports = usersCtrl; 