import React, { Fragment, useEffect, useState } from "react";
import { firebaseDB } from "../../lib/firebase.config";
import { getUsers } from "../../lib/services/user.service";
import { Collections } from "../../models/Collections.interface";
import { collection, query, onSnapshot } from "@firebase/firestore";
import UserCard from "../organisms/UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getRealTimeUsers = async () => {
    const unSub = onSnapshot(
      query(collection(firebaseDB, Collections.USERS)),
      (snap) => {
        setUsers(snap.docs.map((doc) => doc.data()) as any);
      }
    );
  };

  useEffect(() => {
    getRealTimeUsers();
  }, []);

  return (
    <div>
      {users?.map((item, index) => (
        <UserCard key={index} {...item} />
      ))}
    </div>
  );
};

export default UserList;
