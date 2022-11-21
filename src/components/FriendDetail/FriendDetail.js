import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
  const { friendId } = useParams();
  // const params = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((data) => setFriend(data.data));
  }, []);
  return (
    <div>
      {/* <h2>This is details of a Bondhu :{params.friendId} </h2> */}
      <h2>This is details of a Bondhu :{friendId} </h2>
      <h3>Name: {friend.name}</h3>
      <h4>Email: {friend.email}</h4>
      <h6>Wesite: {friend.website}</h6>
      <p>
        <small>City: {friend.address?.city}</small>
      </p>
      <p>
        <small>Lat: {friend.address?.geo?.lat}</small>
      </p>
    </div>
  );
};

export default FriendDetail;
