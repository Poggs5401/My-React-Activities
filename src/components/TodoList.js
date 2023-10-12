import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";

const TodoList = () => {
  let initialList = [
    { id: 1, text: "Clean the house", done: true },
    { id: 2, text: "Buy milk", done: false },
    { id: 3, text: "Create a to-do app using React", done: false },
  ];

  const [list, setList] = useState(initialList);

  const markAsDone = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.done = true;
      }

      return item;
    });

    setList(newList);
  };

  let todoItems = list.map((item, index) => {
    return <TodoItem key={index} markAsDone={markAsDone} todo={item} />;
  });

  const [textInput, setTextInput] = useState("");

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const addTodoItem = () => {
    let newTodo = {
      id: list[list.length - 1].id + 1,
      text: textInput,
      done: false,
    };

    setList((prevList) => [...prevList, newTodo]);
    setTextInput("");
  };
  
  return (
    <Card>
      <Card.Header>To-Do List</Card.Header>
      <ListGroup variant="flush">{todoItems}</ListGroup>
      <Card.Footer>
        <input type="text" onChange={handleTextInput} value={textInput} />
        <Button variant="primary" className="float-end" onClick={addTodoItem}>
          Add
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TodoList;
