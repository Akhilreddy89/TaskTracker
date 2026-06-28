import axios from "axios";
import '../index.css';

const TaskCard = ({ task, fetchTasks, setEditingTask }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(
                `http://localhost:5000/api/tasks/${task._id}`
            );

            fetchTasks();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="task-card">
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
                <strong>Status:</strong> {task.status}
            </p>

            <p>
                <strong>Due:</strong>{" "}
                {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString()
                    : "N/A"}
            </p>

            <div className="btn-group">
                <button onClick={() => setEditingTask(task)}>
                    Edit
                </button>

                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;