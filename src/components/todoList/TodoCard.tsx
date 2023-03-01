import { FC } from "react";
import "./TodoList.scss";

interface IProps {
  title: string;
  description: string;
  isDone: boolean;
  setStatus: () => void;
}

export const TodoCard: FC<IProps> = ({
  title,
  description,
  isDone,
  setStatus,
}) => {
  return (
    <div className="todo-card">
      <span className="title-head title">{title}</span>
      <span className="title">Description</span>
      <p>{description}</p>
      <label>
        Status: <input type="checkbox" checked={isDone} onChange={setStatus} />
      </label>
    </div>
  );
};
