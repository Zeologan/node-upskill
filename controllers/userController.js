const asyncHandler = require("express-async-handler")
//@desc Register a User
//@route Post /api/user/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
    const {username ,email, password} = req.body;
    if(!username || !email, !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await
    res.json({message: "Register the user"});
});

//@desc Login a User
//@route Post /api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "login the user"});
});

//@desc Current a User info
//@route Post /api/user/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "Current the user"});
});

module.exports = {registerUser, loginUser, currentUser}