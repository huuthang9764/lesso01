import React, { useState, useEffect, Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'


const Todos = () => {
  const [todosState, setTodosState] = useState([]);
  const [arrayAnswers, setArrayAnswer] = useState([]);
  //Constant function
  const getAnswer = object => {
    // object {id:"abc",answer:"A"}
    if (arrayAnswers.length === 0) {
      let array = [...arrayAnswers, object]
      setArrayAnswer(array);
    } else {
      let rsArray = arrayAnswers.filter(item => item.id === object.id);
      if (rsArray.length === 0) {
        let array = [...arrayAnswers, object]
        setArrayAnswer(array);
      } else {
        arrayAnswers.forEach(element => {
          if (element.id === object.id) {
            element.answer = object.answer;
          }
        });
      }
    }
    console.log(arrayAnswers);
  }
  getAnswer(arrayAnswers);
  //arrayAnswer => gui len db, no la mang gom nhieu object

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          'https://my-json-server.typicode.com/huuthang9764/live/posts/?_limit=2'
        )
        //console.log(res.data)
        setTodosState(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    getTodos()
  }, [])


  // const markComplete = (id,answer) => {

  //         const newTodos = todosState.map(todo => {
  //           if (todo.id === id) {

  //             alert(id + todo.answer)
  //           }
  //           return todo
  //         })

  //         setTodosState(newTodos)
  //       }

  return (
    <Fragment>
      {todosState.map((todo, index) => {
        return <TodoItem index={index} key={index} todoProps={todo} getAnswer={getAnswer} />;
      })}
    <p style={{color: "red",textAlign:"center"}}>Đáp án: <span>{getAnswer.answer}</span></p>
    </Fragment>
  );
};
export default Todos
