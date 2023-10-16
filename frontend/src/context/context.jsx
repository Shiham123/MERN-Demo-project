import { createContext } from 'react';
import globalAuth from '../firebase/firebase.config.js';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(globalAuth, googleProvider);
  };

  const createUserEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const signInEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const logOut = () => {
    return signOut(globalAuth);
  };
  const info = {
    googleSignIn,
    logOut,
    createUserEmailPassword,
    signInEmailPassword,
  };

  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
