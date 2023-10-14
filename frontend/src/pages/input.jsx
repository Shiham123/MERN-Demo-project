const InputPerson = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const getFormData = new FormData(event.target);
    const title = getFormData.get('title');
    const description = getFormData.get('description');
    const price = getFormData.get('price');

    const allData = { title, description, price };

    fetch('http://localhost:3000/person', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(allData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title : </label>
      <input type="text" name="title" />

      <br />

      <label htmlFor="description">Description : </label>
      <input type="text" name="description" />
      <br />

      <label htmlFor="price">Price : </label>
      <input type="number" name="price" />

      <br />

      <button type="submit">Submit data</button>
    </form>
  );
};

export default InputPerson;
