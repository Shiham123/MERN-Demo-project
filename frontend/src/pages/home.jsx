import { useEffect, useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/person')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/person/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData((prevData) => prevData.filter((item) => item._id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {data &&
        data.map((item, index) => {
          const { description, _id } = item;
          return (
            <div key={index}>
              <h1>{description}</h1>
              <button onClick={() => handleDelete(_id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
