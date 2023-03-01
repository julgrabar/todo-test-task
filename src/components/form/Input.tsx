import { FC } from "react";

interface IProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  error: string | undefined;
  placeholder: string;
  value: any;
  label: string;
}

export const Input: FC<IProps> = ({
  value,
  handleChange,
  name,
  type = "text",
  error,
  placeholder,
  label,
}) => {
  return (
    <div className="fieldset">
      <label>
        {label}
        <input
          className={error && "invalid-field"}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          name={name}
        />
      </label>
      {error && <span className="error">Field is empty</span>}
    </div>
  );
};
