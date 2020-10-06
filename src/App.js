import React, {useState} from 'react';

import {ListItem} from "./components/ListItem";
import {TaskField} from "./components/TaskField";

import "./styles/app.scss"


function App() {
    const [tasks, setTasks] = useState([
        {
            text: 'Задача №1',
            completed: true,
        },
        {
            text: 'Задача №2',
            completed: false,
        },
    ]);

    const onToggleCompleted = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, curIdx) =>
                index === curIdx
                    ? {...task, completed: !task.completed}
                    : task,
            )
        )
    };

    const onRemoveTask = (index) => {
        setTasks((prevTasks) =>
            prevTasks.filter((_, curIdx) =>
                index !== curIdx))
    };

    const onAddTask = text => {
        setTasks(prevTasks => [
                ...prevTasks,
                {text, completed: false,},
            ]
        )
    };

    return (
        <div className="todo">
            <div className="todo__header">
                <h4>Список задач</h4>
            </div>
            <TaskField onAddTask={onAddTask}/>
            <div className="todo__list">
                {tasks.map((task, index) =>
                    <ListItem
                        key={task + index}
                        text={task.text}
                        index={index}
                        completed={task.completed}
                        onToggleCompleted={onToggleCompleted}
                        onRemoveTask={onRemoveTask}
                    />
                )}
            </div>
        </div>
    );
}

export default App;

