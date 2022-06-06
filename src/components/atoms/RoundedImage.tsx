import React, { FC, ReactEventHandler } from "react";

interface Props {
  src: string;
  className?: string;
}

const RoundedImage: FC<Props> = ({ src, className }) => {
  return (
    <div className={`rounded-full h-20 w-20 overflow-hidden ${className}`}>
      <img
        alt="user"
        src={src || "/images/placeholder.svg"}
        className="h-full w-full object-cover bg-white"
      />
    </div>
  );
};

export default RoundedImage;
