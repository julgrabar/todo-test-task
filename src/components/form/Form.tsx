import { ChangeEvent, FC, useState } from "react";
import { getTodos } from "../../redux/todosSelector";
import { addTodo } from "../../redux/todosSlice";
import { useAppDispatch, useAppSelector } from "../../redux/typedHooks";
import "./Form.scss";
import { Input } from "./Input";
interface IFormData {
  title: string;
  description: string;
}
export const Form: FC = () => {
  const todos = useAppSelector(getTodos);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Partial<IFormData>>({});

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    if (!title.trim()) {
      setErrors((prev) => ({ ...prev, title: "Field is empty" }));
    }

    if (!description.trim()) {
      setErrors((prev) => ({ ...prev, description: "Field is empty" }));
    }

    if (!title.trim() || !description.trim()) {
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      title,
      description,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        placeholder="Enter title"
        handleChange={handleChange}
        value={title}
        name="title"
        error={errors.title}
        label="Title"
      />
      <Input
        placeholder="Enter description"
        value={description}
        handleChange={handleChange}
        name="description"
        error={errors.description}
        label="Description"
      />
      <button type="submit">Create</button>
    </form>
  );
};
