import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest } from "../Api";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const testUser = {
  username: 'TestUser',
  email: 'TestEmail@gmail.com',
  password: 'TestPassword',
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const login = async (user) => {
    try {
      //const res = await loginRequest(user);
      //setUser(res.data);
      if (user.email !== testUser.email || user.password !== testUser.password) {
        throw new Error("Invalid credentials");
      }
      setUser(testUser);
      setIsAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth}