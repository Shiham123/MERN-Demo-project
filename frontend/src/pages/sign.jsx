import { useContext } from 'react';
import { AppContext } from '../context/context';

const SignIn = () => {
  const context = useContext(AppContext);
  const { signInEmailPassword } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    signInEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };

        fetch('http://localhost:3000/email', {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },

          body: JSON.stringify(user),
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

export default SignIn;
