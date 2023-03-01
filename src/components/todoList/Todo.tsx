import React, { FC, useState } from "react";
import { changeStatus } from "../../redux/todosSlice";
import { useAppDispatch } from "../../redux/typedHooks";
import { ITodo } from "../../types/ITodo";
import { Modal } from "../modal/Modal";
import { TodoCard } from "./TodoCard";

export const Todo: FC<ITodo> = ({ id, title, description, isDone }) => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeNoteStatus = (id: number) => {
    dispatch(changeStatus(id));
  };

  const handleClick = (evt: React.MouseEvent<HTMLTableRowElement>) => {
    const { name } = evt.target as HTMLInputElement;
    if (name === "status") {
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <tr key={id} onClick={handleClick}>
        <td>{`${id}.`}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => changeNoteStatus(id)}
            name="status"
          />
        </td>
      </tr>
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          <TodoCard
            title={title}
            description={description}
            isDone={isDone}
            setStatus={() => changeNoteStatus(id)}
          />
        </Modal>
      )}
    </>
  );
};
