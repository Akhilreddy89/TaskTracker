import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const taskRouter = Router();

taskRouter.route("/")
  .get(authMiddleware, getTasks)
  .post(authMiddleware, createTask);

taskRouter.route("/:id")
  .put(authMiddleware, updateTask)
  .delete(authMiddleware, deleteTask);

export default taskRouter;