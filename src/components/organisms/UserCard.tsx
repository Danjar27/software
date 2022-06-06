import React, { FC } from "react";
import { User } from "../../models/User.interface";
import RoundedImage from "../atoms/RoundedImage";
import Badge from "../atoms/Badge";

const UserCard: FC<User> = ({ name, lastName, email, dni, photo_url }) => {
  return (
    <div className="center bg-gray-100 w-[500px] py-4 my-4 rounded-xl">
      <div className="w-1/3 center">
        <RoundedImage src={photo_url as string} />
      </div>
      <section className="flex flex-col justify-start w-2/3 whitespace-nowrap">
        <div className="mb-2">
          <span className="font-bold text-md">{`${name} ${lastName}`}</span>
          <Badge text={dni as number} />
        </div>
        <span className="text-gray-500 font-medium text-sm">{email}</span>
      </section>
    </div>
  );
};

export default UserCard;
