import React from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
  customColor?: string;
}

const RoundedButton: React.FC<Props> = ({
  text,
  customColor,
  disabled,
  ...props
}) => {
  const disableStyle = disabled && "bg-gray pointer-events-none";

  return (
    <button
      {...props}
      type="button"
      className={`font-bold text-white py-2 px-6 ${props.className} 
    ${customColor || "bg-red hover:bg-red-hover"} ${disableStyle}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
