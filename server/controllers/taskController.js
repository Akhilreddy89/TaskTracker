import Task from "../models/Task.js";

const createTask = async (req, res) => {
    try {
        const { title, description, dueDate, status } = req.body;
        console.log(req);
        const task = await Task.create({
            title,
            description,
            dueDate,
            status,
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status, dueDate } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { title, description, status, dueDate },
            { new: true, runValidators: true }
        );
        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task :updatedTask,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            task: deletedTask,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


}
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id
        });
        res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            tasks,
        });

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export {
    createTask,
    updateTask,
    deleteTask,
    getTasks,
};
