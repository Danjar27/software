import Image from "next/image";
import React, { FC, HTMLAttributes } from "react";

interface Props {
  gmail?: boolean;
  label?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const AuthButton: FC<Props> = ({
  gmail,
  label,
  className,
  onClick,
  disabled,
}) => {
  const src = gmail ? "/images/gmail.svg" : "/images/email.svg";
  const disableStyle = disabled && "opacity-60 pointer-events-none";

  return (
    <button
      className={`center hover:bg-gray-200 active:bg-gray-100
      bg-gray-100 rounded-md px-6 py-2 ${className} ${disableStyle}`}
      disabled={disabled}
      onClick={onClick}
    >
      <Image src={src} width={30} height={30} />
      <span className="font-bold ml-2 text-accent w-full">{label}</span>
    </button>
  );
};

export default AuthButton;
