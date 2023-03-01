import { FC } from "react";
import { getTodos } from "../../redux/todosSelector";
import { useAppSelector } from "../../redux/typedHooks";
import { Todo } from "./Todo";

export const TodoList: FC = () => {
  const todos = useAppSelector(getTodos);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(({ id, title, description, isDone }) => (
          <Todo
            key={id}
            id={id}
            description={description}
            isDone={isDone}
            title={title}
          />
        ))}
      </tbody>
    </table>
  );
};
