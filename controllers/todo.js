import todoData from "../models/todo.js";
import mongoose from "mongoose";

export const addTodoList = async (req, res) => {
  const { email, name } = req.body;

  try {
    const user = await todoData.findOne({ email: email });
    if (user) {
      return res.status(400).send({
        message: "User already exist........",
      });
    } else {
      try {
        const newUser = new todoData({ name, email });
        await newUser.save();
        const result = {
          data: {
            name: newUser.name,
            email: newUser.email,
            id: newUser._id,
          },
          message: "Add successfully......",
        };
        res.status(201).json(result);
      } catch (error) {
        res.status(409).json({ message: error.message });
      }
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getTodoList = async (req, res) => {
  try {
    const userList = await todoData.find();
    return res.status(201).json({ data: userList });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id, email, name } = req.body;
  const updateData = {
    $set: {
      email: email,
      name: name,
    },
  };
  try {
    const updateUser = await todoData.findOneAndUpdate(
      { _id: id },
      updateData,
      {
        new: true,
      }
    );
    return res.status(201).json({ data: updateUser });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const deleteUser = await todoData.findByIdAndDelete(id);
    if (deleteUser) {
      return res
        .status(201)
        .json({ message: "User delete successfully", data: deleteUser });
    } else {
      return res.status(409).json({ message: "User delete failed" });
    }
    // console.log("delete user=======", deleteUser, id);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
