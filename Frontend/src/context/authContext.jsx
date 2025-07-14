import { createContext, useContext, useState, useEffect } from "react";
import { AppContext } from "./allContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [userName,setUserName]=useState("No user")

  useEffect(() => {
    if (localStorage.getItem("token") != null && localStorage.getItem("name") != null) {
      setUserName(localStorage.getItem("name"))
      // console.log(localStorage.getItem("name"))
      setLogged(true);
    }else{
      console.log("not Found")
    }
  }, []);
  return (
    <AuthContext.Provider value={{logged,userName}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export const useAuthContext = () => {
  return useContext(AuthContext);
};
