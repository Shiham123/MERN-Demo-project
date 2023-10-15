import { useContext } from 'react';
import { AppContext } from '../context/context';

const LoginPage = () => {
  const context = useContext(AppContext);
  const { googleSignIn, logOut } = context;

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const lastSignIn = result.user.metadata.lastSignInTime;
        const lastLogin = result.user.metadata.lastLoginAt;
        const data = { lastLogin, lastSignIn };
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={handleGoogle}>Google sign in</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default LoginPage;
