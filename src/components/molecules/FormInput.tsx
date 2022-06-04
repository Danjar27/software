import { useField, ErrorMessage } from "formik";
import React, { FC, InputHTMLAttributes } from "react";
import FieldError from "../atoms/FieldError";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
}

const FormInput: FC<Props> = ({
  name,
  className,
  label,
  onChange,
  ...props
}) => {
  const [field, { error, touched }, { setTouched, setValue }] = useField(name);

  const onBLur = () => {
    setTouched(true);
  };

  const formStyle = error && touched ? "form-input-error" : "form-input";

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div className="flex flex-col" data-testid="form-input">
      {label && (
        <label htmlFor={name} className="form-input-label">
          {label}
        </label>
      )}
      <input
        className={`${formStyle} ${className || ''}`}
        value={field.value}
        onBlur={onBLur}
        onChange={onChange || onChangeHandler}
        {...props}
      />
      <div className="h-6">
        <ErrorMessage name={name} render={FieldError} />
      </div>
    </div>
  );
};

export default FormInput;