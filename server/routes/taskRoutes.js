import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.route("/")
  .get(getTasks)
  .post(createTask);

taskRouter.route("/:id")
  .put(updateTask)
  .delete(deleteTask);

export default taskRouter;