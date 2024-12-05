import { User } from '../models/index.js';
/**
 * GET All Users /users
 * @returns an array of Users
*/
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
/**
 * GET User based on id /user/:id
 * @param string id
 * @returns a single User object
*/
export const getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        const student = await User.findById(userId);
        if (student) {
            res.json(student);
        }
        else {
            res.status(404).json({
                message: 'Volunteer not found'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
/**
* POST User /users
* @param object username
* @returns a single User object
*/
export const createUser = async (req, res) => {
    const { username, email } = req.body;
    try {
        const newUser = await User.create({
            username, email
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
/**
 * PUT User based on id /users/:id
 * @param object id, username
 * @returns a single User object
*/
export const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true });
        if (!user) {
            res.status(404).json({ message: 'No user with this id!' });
        }
        res.json(user);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
/**
* DELETE User based on id /users/:id
* @param string id
* @returns string
*/
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        if (!user) {
            res.status(404).json({
                message: 'No user with that ID'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
