const User = require("../models/user")

const usercontroller = {
    get: async (req, res) => {
        try {
            let users = await User.find();
            res.send(users);
        } catch (error) {
            res.send(error);
        }
    },
    post: async (req, res) => {
        try {
            let user = await User.create(req.body);
            res.send(user);
        } catch (error) {
            res.send(error);
        }
    }
}
module.exports = usercontroller