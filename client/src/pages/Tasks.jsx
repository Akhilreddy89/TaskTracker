import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import { getTasks } from "../services/taskServices";
import Navbar from "../components/NavBar";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />

      <div className="home-container">

        {/* Show only while editing */}
        {editingTask && (
          <TaskForm
            fetchTasks={fetchTasks}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />
        )}

        <div className="task-container">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                fetchTasks={fetchTasks}
                setEditingTask={setEditingTask}
              />
            ))
          ) : (
            <p>No Tasks Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Tasks;