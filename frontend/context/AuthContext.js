import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../Api";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
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
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        console.error("Unexpected error:", error);
        setErrors([{ message: "Unexpected error occurred" }]);
      }
    }
  };

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        console.error("Unexpected error:", error);
        setErrors([{ message: "Unexpected error occurred" }]);
      }
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if(errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000)
      return () => clearTimeout(timer);
    }
  }
  , [errors]);

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