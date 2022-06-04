import {Option} from "../../models/interfaces/Select.interface";

const FieldError = (message: string|Option<any>) => {

  const messageText = typeof message === "string" ? message : message.label;

  return <p className="text-xs text-red-400 mt-1 px-2">{messageText}</p>;
};

export default FieldError;