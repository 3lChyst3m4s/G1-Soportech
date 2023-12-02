import { createContext, useState, useContext, useEffect } from "react";
import { 
  getRequest as getR,
  getLog as getL
} from "../Api";

const RequestContext = createContext();

const useRequest = () => {
  const context = useContext(RequestContext);

  if (!context) {
    throw new Error("useContext must be used within an RequestProvider");
  }

  return context;
};

const RequestProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState(null);
  const [log, setLog] = useState(null);
  const [errors, setErrors] = useState([]);

  const getRequest = async (id) => {
    try {
      setLoading(true);
      const res = await getR(id);
      setRequest(res.data);
    } catch (error) {
      setErrors(error.response.data);
    } finally {
      setLoading(false);
    }
  }  

  const getLog = async (id) => {
    try {
      setLoading(true);
      const res = await getL(id);
      setLog(res.data);
    } catch (error) {
      setErrors(error.response.data);
    } finally {
      setLoading(false);
    }
  }

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
    <RequestContext.Provider
      value={{
        getRequest,
        getLog,
        loading,
        request,
        log,
        errors,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export { RequestContext, RequestProvider, useRequest}