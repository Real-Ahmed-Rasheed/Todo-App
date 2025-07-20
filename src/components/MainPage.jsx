import React, { useState, useContext, useEffect } from 'react'
import TodoItem from './TodoItem'
import TextField from './TextField'
import Button from './Button'
import { MyContext } from '../context/index';
function MainPage() {
    const { Todo, setTodo, allTodos, getAllTodos, saveTodo, updateTodo, deleteTodo } = useContext(MyContext);

    const [EditId, setEditId] = useState(null)
    const [editText, setEditText] = useState('');

    useEffect(() => {
        getAllTodos();
    }, [Todo])

    const handleSave = (todo) => {
        saveTodo(todo);
        setTodo('');
    }
    const handleSetEdit = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    }
    const handleUpdate = (id, todoText) => {
        updateTodo(id, todoText);
        setTodo('');
        setEditId(null);
    };
    const handleDelete = (id) => {
        deleteTodo(id);
    }

    return (
        <>
            <h1 className='text-center'>Simple Todo APP</h1>
            <hr className='mt-4.5' />

            <div className='mt-10 flex content-center items-center'>

                <TextField id="outlined-basic" label="Type here to add" variant="Type Here todo" width={55}
                    onChange={(e) => setTodo(e.target.value)} value={Todo}

                />

                <Button
                    title="Save"
                    onClick={() => handleSave(Todo)}
                />
            </div>


            <TodoItem />
            {/* show all previuos todos from localstorage */}
            {allTodos?.map((todo) => (
                <div key={todo.id} className='mt-10 flex content-center items-center'>
                    <div className='p-1.5'>
                        {(EditId == todo.id) ? (
                            <TextField id="outlined-basic" value={editText} variant="Type Here" width={55}
                                onChange={(e) => {
                                    setEditText(e.target.value);
                                }} />)
                            : (<div className='w-2xl bg-gray-700 min-h-9 rounded-md'>
                                <p>
                                    {todo?.text}
                                </p>
                            </div>)}
                    </div>

                    {/* Button container */}
                    <div className='flex content-center items-center gap-1.5'>


                        {(EditId == todo.id) ? (<Button title='Save' onClick={() => handleUpdate(todo.id, editText)} />)
                            :
                            (<Button title='Edit' onClick={() => { handleSetEdit(todo) }} />)}

                        {/* Delete Button */}
                        {(EditId == todo.id) ? (null)
                            :
                            (<Button title='Delete' onClick={() => { handleDelete(todo.id) }} />)}
                    </div>


                </div>
            ))}


        </>
    )
}

export default MainPage
