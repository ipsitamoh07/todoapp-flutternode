const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        await UserService.registerUser(email, password);
        res.json({ status: true, success: "User Registered Successfully" });
    } catch (error) {
        if (error.message === 'Email already in use') {
            res.status(400).json({ status: false, message: error.message });
        } else {
            res.status(500).json({ status: false, message: 'Internal server error' });
        }
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.checkUser(email);

        if (!user) {
            return res.status(400).json({ status: false, message: "User doesn't exist" });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ status: false, message: 'Password Invalid' });
        }

        const tokenData = { _id: user._id, email: user.email };
        const token = await UserService.generateToken(tokenData, 'secretKey', '1h');

        return res.status(200).json({ status: true, token: token });
    } catch (error) {
        res.status(500).json({ status: false, message: 'Internal server error' });
    }
};
