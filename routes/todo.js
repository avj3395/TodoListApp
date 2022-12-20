import express from "express";
import {
  addTodoList,
  deleteUser,
  getTodoList,
  updateUser,
} from "../controllers/todo.js";
const router = express.Router();

router.get("/get-user", getTodoList);

router.post("/add-user", addTodoList);
router.put("/update-user", updateUser);
router.delete("/delete-user", deleteUser);

export default router;
