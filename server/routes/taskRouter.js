import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const taskRouter = Router();

taskRouter.route("/",authMiddleware)
  .get(getTasks)
  .post(createTask);

taskRouter.route("/:id",authMiddleware)
  .put(updateTask)
  .delete(deleteTask);

export default taskRouter;