const todos = [
    {task: "Mow the yard", id: 1},
    {task: "Work on Odin projects", id: 2},
    {task: "Feed the cat", id: 3},
];

function ToDoList () {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
}

export default ToDoList