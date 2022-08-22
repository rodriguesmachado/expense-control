import { FunctionComponent, HTMLInputTypeAttribute } from "react";
import { Controller, Control } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any>;
  defaultValue?: string;
  type?: HTMLInputTypeAttribute
}

export const Input: FunctionComponent<Props> = ({
  name,
  control,
  defaultValue = "",
  type = "text"
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field }) => (
        <input {...field} type={type} />
      )}
    />
  );
}
