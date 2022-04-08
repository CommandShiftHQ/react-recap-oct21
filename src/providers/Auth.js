import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signIn = (username, password) => {
    // mock login logic
    if (
      username &&
      username == password &&
      !isNaN(username) &&
      username > 0 &&
      username < 5
    ) {
      setCurrentUser(username);
      return true;
    }

    return false;
  };

  const signOut = () => {
    setCurrentUser(null);
  };

  const value = { currentUser, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
