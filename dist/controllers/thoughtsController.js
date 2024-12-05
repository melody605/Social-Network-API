import { Thought } from '../models/index.js';
/**
 * GET All Thoughts /thoughts
 * @returns an array of Thoughts
*/
export const getAllThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
/**
 * GET Thoughts based on id /thoughts/:id
 * @param string id
 * @returns a single Thoughts object
*/
export const getThoughtsById = async (req, res) => {
    const { thoughtsId } = req.params;
    try {
        const student = await Thought.findById(thoughtsId);
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
* POST Thoughts /thoughtss
* @param object thoughtsname
* @returns a single Thoughts object
*/
export const createThoughts = async (req, res) => {
    const { thoughtsname, email } = req.body;
    try {
        const newThoughts = await Thought.create({
            thoughtsname, email
        });
        res.status(201).json(newThoughts);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
/**
 * PUT Thoughts based on id /thoughtss/:id
 * @param object id, thoughtsname
 * @returns a single Thoughts object
*/
export const updateThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.findOneAndUpdate({ _id: req.params.thoughtsId }, { $set: req.body }, { runValidators: true, new: true });
        if (!thoughts) {
            res.status(404).json({ message: 'No thoughts with this id!' });
        }
        res.json(thoughts);
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
/**
* DELETE Thoughts based on id /thoughtss/:id
* @param string id
* @returns string
*/
export const deleteThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.findOneAndDelete({ _id: req.params.thoughtsId });
        if (!thoughts) {
            res.status(404).json({
                message: 'No thoughts with that ID'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};