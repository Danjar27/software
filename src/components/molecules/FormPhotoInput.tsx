import React, { FC, InputHTMLAttributes, useRef, useState } from "react";
import { ErrorMessage, useField } from "formik";
import FieldError from "../atoms/FieldError";
import { saveFile } from "../../lib/services/storage.service";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
  acceptedExtensions?: string[];
}

const FormPhotoInput: FC<Props> = ({
  name,
  label,
  className,
  acceptedExtensions,
  ...props
}) => {
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [field, { error, touched }, { setTouched, setValue }] = useField(name);

  const onBLur = () => {
    setTouched(true);
  };

  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsLoading(true);
      const filePath = await saveFile("users", (e.target.files as FileList)[0]);
      setValue(filePath);
      setIsLoading(false);
    }
  };

  const openFileDialog = () => {
    (inputRef?.current as any)?.click();
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="form-input-label">
          {label}
        </label>
      )}
      <div className="relative w-64 h-64 center  bg-[#F3F4F6] overflow-hidden rounded-xl">
        {isLoading && (
          <img
            src={"/images/loading_spinner.svg"}
            className="w-32 h-32 animate-spin object-cover"
            alt="user picture"
          />
        )}
        {!isLoading && (
          <img
            src={field.value ?? "/images/placeholder.svg"}
            className="w-full object-cover h-full"
            alt="user picture"
          />
        )}
        <button
          onClick={openFileDialog}
          className="opacity-20 hover:bg-opacity-60 hover:opacity-100  absolute bg-gray-300 bottom-0 w-full h-10"
        >
          <p className="text-sm text-accent uppercase font-extrabold">
            Subir una imagen
          </p>
        </button>
      </div>
      <input
        ref={inputRef}
        hidden={true}
        data-testid="form-photo-input"
        type="file"
        onBlur={onBLur}
        onChange={props.onChange || onChangeHandler}
        {...props}
      />
      <div className="h-6">
        <ErrorMessage name={name} render={FieldError} />
      </div>
    </div>
  );
};

export default FormPhotoInput;
