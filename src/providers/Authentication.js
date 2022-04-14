import { createContext, useContext, useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { app } from '../firebase';

const AuthenticationContext = createContext();

export const useAuthentication = () => useContext(AuthenticationContext);

export const AuthenticationProvider = ({ children }) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState(undefined);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOut = () => {
    return auth.signOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
