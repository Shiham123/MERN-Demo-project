import { useEffect, useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/person')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data &&
        data.map((item, index) => {
          const { description } = item;
          return (
            <div key={index}>
              <h1>{description}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
