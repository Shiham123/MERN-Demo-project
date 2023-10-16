import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UsersPage = () => {
  const loader = useLoaderData();

  const [userData, setUserData] = useState(loader);

  useEffect(() => {
    fetch('http://localhost:3000/user', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUserDelete = (id) => {
    fetch(`http://localhost:3000/user/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData((prevData) => prevData.filter((item) => item._id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {userData &&
        userData.map((item, index) => {
          const { lastLogin, lastSignIn, userMail, _id } = item;
          return (
            <div key={index}>
              <h1>{lastLogin}</h1>
              <br />
              <h1>{lastSignIn}</h1>

              <br />
              <h1>{userMail}</h1>

              <button onClick={() => handleUserDelete(_id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default UsersPage;
