import { useContext } from 'react';
import { AppContext } from '../context/context';

const EmailLogin = () => {
  const context = useContext(AppContext);
  const { createUserEmailPassword } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    createUserEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);

        const createdAt = result.user?.metadata?.creationTime;
        const emailData = { email, createdAt: createdAt };

        fetch('http://localhost:3000/email', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },

          body: JSON.stringify(emailData),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" />

        <br />
        <br />

        <label htmlFor="password">Password : </label>
        <input type="password" name="password" />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailLogin;
