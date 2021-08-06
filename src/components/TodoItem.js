
import React, { Fragment } from 'react'
const TodoItem = ({ todoProps, getAnswer, index }) => {
    console.log(index);
    let todo = todoProps;
    const todoItemStyle = {
        backgrourd: '#f4f4f4',
        padding: '5px 0 5px',
        borderBottom: '1px #ccc dotted',
    };
    const contantStyle = {
        marginLeft: '20px',
        padding: '10px',
    };
    return (
        <Fragment>
            <div style={contantStyle}>
                <div class="radio" >
                    <h5>Câu: {todo.id}</h5>
                    <p>{todo.question}</p>
                    <div style={todoItemStyle}>
                        <label>
                            <input
                                onChange={(e) => {
                                    getAnswer({ id: todo.id, answer: "A" })
                                }}
                                type="radio"
                                name={index}
                                id="rdOptionA"
                                value="A"
                            />
                            {todo.option_a}
                        </label>
                    </div>
                    <div style={todoItemStyle}>
                        <label>
                            <input
                                onChange={(e) => {
                                    getAnswer({ id: todo.id, answer: "B" })
                                }}
                                type="radio"
                                name={index}

                                value="B"
                                id="rdOptionB" />
                            {todo.option_b}
                        </label>
                    </div>
                    <div style={todoItemStyle}>
                        <label>
                            <input
                                onChange={(e) => {
                                    getAnswer({ id: todo.id, answer: "C" })
                                }}
                                value="C"
                                type="radio"
                                name={index}

                                id="rdOptionC" />
                            {todo.option_c}
                        </label>
                    </div>
                    <div style={todoItemStyle}>
                        <label>
                            <input
                                onChange={(e) => {
                                    getAnswer({ id: todo.id, answer: "D" })
                                }}
                                value="D"
                                type="radio"
                                name={index}

                                id="rdOptionD" />
                            {todo.option_d}
                        </label>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

//PropTypes

export default TodoItem
