import { useLoaderData } from 'react-router-dom';

const InputTwo = () => {
  const loader = useLoaderData();
  const { _id, title, description, price } = loader;

  const handleSubmit = (event) => {
    event.preventDefault();
    const getFormData = new FormData(event.target);
    const title = getFormData.get('title');
    const description = getFormData.get('description');
    const price = getFormData.get('price');
    const editData = { title, description, price };

    fetch(`http://localhost:3000/person/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(editData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title : </label>
        <input type="text" name="title" defaultValue={title} />

        <br />

        <label htmlFor="description">Description : </label>
        <input type="text" name="description" defaultValue={description} />
        <br />

        <label htmlFor="price">Price : </label>
        <input type="number" name="price" defaultValue={price} />

        <br />

        <button type="submit">Submit data</button>
      </form>
    </div>
  );
};

export default InputTwo;
