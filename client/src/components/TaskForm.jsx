import { useEffect, useState } from "react";
import axios from "axios";
import '../index.css';

const TaskForm = ({ fetchTasks, editingTask, setEditingTask }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "Pending",
        dueDate: "",
    });

    useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title,
                description: editingTask.description,
                status: editingTask.status,
                dueDate: editingTask.dueDate?.split("T")[0],
            });
        }
    }, [editingTask]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editingTask) {
                await axios.put(
                    `http://localhost:5000/api/tasks/${editingTask._id}`,
                    formData
                );
                setEditingTask(null);
            } else {
                await axios.post(
                    "http://localhost:5000/api/tasks",
                    formData
                );
            }

            setFormData({
                title: "",
                description: "",
                status: "Pending",
                dueDate: "",
            });

            fetchTasks();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={formData.title}
                onChange={handleChange}
                required
            />

            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />

            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
            >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>

            <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
            />

            <button type="submit">
                {editingTask ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
};

export default TaskForm;