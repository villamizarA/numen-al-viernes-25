import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) 
        setUser(res.data);
        setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.message);
    }
  };

  const signin = async (user) => {
    try {
        const res = await loginRequest(user);
        console.log(res)
        setIsAuthenticated(true);
        setUser(res.data);
    } catch (error) {
        setErrors(error.response.data)
    }
};
const logout = () => {
  Cookies.remove("token");
  setIsAuthenticated(false);
  setUser(null);
};

useEffect(() => {
  if (errors.length > 0) {
      const timer = setTimeout(() => {
          setErrors([])
      }, 5000)
      return () => clearTimeout(timer)

  }
}, [errors])

useEffect(() => {
  async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
          setIsAuthenticated(false);
          setLoading(false);
          setUser(null);
      }
      try {
          const res = await verifyTokenRequest(cookies.token);
          if (!res.data) {
              setIsAuthenticated(false);
              setLoading(false);
              return;
          }

          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
      } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
      }
  }
  checkLogin();
}, []);

return (
  <AuthContext.Provider
      value={{
          signup,
          signin,
          logout,
          loading,
          user,
          isAuthenticated,
          errors,
      }}>
      {children}
  </AuthContext.Provider>
)
}