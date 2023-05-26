import { ChangeEvent, useState } from "react";

export const UseField = (type: string) => {
  // can add a second param to set value?
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const onReset = () => {
    setValue("");
  };

  return {
    type,
    value,
    onChange,
    onReset,
  };
};

export const UseTextArea = () => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const onReset = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    onReset,
  };
};

export const UseCheckBox = (type: string) => {
  if (type === "checkbox") {
    throw new Error("this is a checkbox hook");
  }
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  };

  const onReset = () => {
    setChecked(false);
  };

  return {
    type,
    onChange,
    onReset,
    checked,
  };
};
