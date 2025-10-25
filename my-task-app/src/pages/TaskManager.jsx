import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/Button';
import Card from '../components/Card';

function TaskManager() {
  // State for tasks (saved to localStorage automatically)
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
  // State for new task input
  const [newTask, setNewTask] = useState('');
  
  // State for filter (All, Active, Completed)
  const [filter, setFilter] = useState('All');

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(), // Unique ID
        text: newTask,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks([...tasks, task]);
      setNewTask(''); // Clear input
    }
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true; // 'All'
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Task Manager</h1>

      {/* Add Task Section */}
      <Card className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Enter a new task..."
            className="flex-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
          <Button onClick={addTask}>Add Task</Button>
        </div>
      </Card>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        {['All', 'Active', 'Completed'].map(filterType => (
          <Button
            key={filterType}
            variant={filter === filterType ? 'primary' : 'secondary'}
            onClick={() => setFilter(filterType)}
          >
            {filterType}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <Card>
            <p className="text-center text-gray-500">No tasks found</p>
          </Card>
        ) : (
          filteredTasks.map(task => (
            <Card key={task.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5"
                  />
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                </div>
                <Button
                  variant="danger"
                  onClick={() => deleteTask(task.id)}
                  className="ml-2"
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Task Statistics */}
      <Card className="mt-6">
        <div className="flex justify-around text-center">
          <div>
            <p className="text-2xl font-bold">{tasks.length}</p>
            <p className="text-gray-500">Total</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-500">
              {tasks.filter(t => t.completed).length}
            </p>
            <p className="text-gray-500">Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-500">
              {tasks.filter(t => !t.completed).length}
            </p>
            <p className="text-gray-500">Active</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TaskManager;