import { deleteTask } from "../services/taskServices";
import "../style/TaskCard.css";

const TaskCard = ({ task, fetchTasks, setEditingTask }) => {

    const handleDelete = async () => {
        try {
            await deleteTask(task._id);
            fetchTasks();
        } catch (error) {
            console.log(error);
        }
    };

    const today = new Date();

    const isOverdue =
        task.dueDate &&
        new Date(task.dueDate) < today &&
        task.status !== "Completed";

    return (
        <div className={`task-card ${isOverdue ? "urgent-card" : ""}`}>

            {isOverdue && (
                <span className="urgent-badge">
                    🚨 Urgent
                </span>
            )}

            <h3>{task.title}</h3>

            <p className="description">
                {task.description || "No description available"}
            </p>

            <p>
                <strong>Status:</strong>
                <span className={`status ${task.status.toLowerCase().replace(" ","-")}`}>
                    {task.status}
                </span>
            </p>

            <p>
                <strong>Due:</strong>{" "}
                {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString()
                    : "N/A"}
            </p>

            <div className="btn-group">
                <button
                    className="edit-btn"
                    onClick={() => setEditingTask(task)}
                >
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>

        </div>
    );
};

export default TaskCard;