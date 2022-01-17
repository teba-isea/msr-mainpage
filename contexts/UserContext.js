import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState({
    isLoggedIn: false,
    user: {},
  });

  const login = (user) => {
    setUser({
      isLoggedIn: true,
      user: user,
    });
  };

  const logout = () => {
    setUser({
      isLoggedIn: false,
      user: {},
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

const userContext = () => useContext(UserContext);

export default userContext;
