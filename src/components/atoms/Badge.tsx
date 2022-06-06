import React, { FC } from "react";

interface Props {
  text: string | number;
  className?: string;
}

const Badge: FC<Props> = ({ text, className }) => {
  return (
    <span
      className={`bg-accent text-white text-xs font-bold px-4 py-1 rounded-full ml-2 ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
