import React, {useEffect} from 'react';
import TodoList from "./todo/TodoList";
import Context from './context';
import AddTodo from './todo/AddTodo';
import Loader from './Loader';

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
            .then(response => response.json())
            .then( todos => {
                setTimeout( () => {
                    setTodos(todos);
                    setLoading(false)
                }, 2000)
            });
    }, []);

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) todo.completed = !todo.completed;
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos( todos.filter(todo => todo.id !== id) );
    }

    function addTodo(title) {
        setTodos(todos.concat([
            {
                title,
                id: Date.now(),
                completed: false
            }
        ]));
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>Todo application</h1>
                <h2>Todo list</h2>
                <AddTodo onCreate={addTodo} />
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : loading ? <Loader /> : (
                    <p>No todos</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;
