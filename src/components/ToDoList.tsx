import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Task {
    id: number | null;
    name: string;
}

const ToDoList: React.FC = () => {
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<Task>({ id: null, name: '' });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const nextId: number = taskList.length > 0 ? taskList[taskList.length - 1].id! + 1 : 1;
        setNewTask({ id: nextId, name: event.target.value });
    };

    const AddTask = () => {
        if (newTask.name.trim() !== '') { // Prevent adding empty tasks
            setTaskList([...taskList, newTask]);
            setNewTask({ id: null, name: '' }); // Clear input field after adding task
        }
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            AddTask();
        }
    };

    const removeTask = (taskId: number | null) => {
        setTaskList(taskList.filter(task => task.id !== taskId));
    };

    const moveTaskUp = (taskId: number | null) => {
        const index = taskList.findIndex(task => task.id === taskId);
        if (index === 0) return;
        const newList = [...taskList];
        const temp = newList[index];
        newList[index] = newList[index - 1];
        newList[index - 1] = temp;
        setTaskList(newList);
    };

    const moveTaskDown = (taskId: number | null) => {
        const index = taskList.findIndex(task => task.id === taskId);
        if (index === taskList.length - 1) return;
        const newList = [...taskList];
        const temp = newList[index];
        newList[index] = newList[index + 1];
        newList[index + 1] = temp;
        setTaskList(newList);
    };

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask.name}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress} />
                <button className="add-button" onClick={AddTask}>+</button>
            </div>
            <ol>
                {taskList.map(task => (
                    <li key={task.id}>
                        <span className="text">{task.name}</span>
                        <button className="delete-button" onClick={() => removeTask(task.id)}>-</button>
                        <button className="move-button" onClick={() => moveTaskUp(task.id)}><span role="img" aria-label="Move Up">👆</span></button>
                        <button className="move-button" onClick={() => moveTaskDown(task.id)}><span role="img" aria-label="Move Down">👇</span></button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;