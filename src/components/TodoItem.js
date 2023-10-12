import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const TodoItem = (props) => {
  return (
    <ListGroup.Item>
      <Button
        onClick={() => {
          props.deleteToDo(props.todo.id);
        }}
        className="float-end"
        variant="danger"
        size="sm"
      >
        Delete
      </Button>
      {props.todo.done ? (
        <>
          <span className="done">{props.todo.text}</span>
          <span className="float-end">&#128077;</span>
        </>
      ) : (
        <>
          {props.todo.text}
          <Badge
            pill
            bg="success"
            className="float-end"
            onClick={() => {
              props.markAsDone(props.todo.id);
            }}
          >
            &#10003;
          </Badge>
        </>
      )}
    </ListGroup.Item>
  );
};

export default TodoItem;
