import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import './Todo.css'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();


    return (
        <>
        <div className='main-div'>
            <div className="child-div">
                <figure>
                    <figcaption>
                        Add Your List Here <span style={{ fontSize: '30px' }}> &#9996; </span>
                    </figcaption>
                </figure>

                <div className='addItems'>
                    <input type="text" placeholder='Add Items..'
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                </div>

                <div className="showItems">
                    {
                        list.map((item) => {
                            return (
                                <div className="eachItem" key={item.id}>
                                    <h3>{item.data}</h3>
                                    <div className="todo-btn">
                                        <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => dispatch(deleteTodo(item.id))}></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo