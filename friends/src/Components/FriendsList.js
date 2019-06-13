import React from "react";

import Friend from "./Friend";

const FriendsList = ({ friends, deleteFriend, setForm }) => {
  return (
    <div>
      {friends.map(friend => (
        <Friend
          friend={friend}
          key={friend.id}
          deleteFriend={deleteFriend}
          setForm={setForm}
        />
      ))}
    </div>
  );
};

export default FriendsList;
