import { createContext } from 'react';
import globalAuth from '../firebase/firebase.config.js';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(globalAuth, googleProvider);
  };

  const logOut = () => {
    return signOut(globalAuth);
  };
  const info = { googleSignIn, logOut };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
