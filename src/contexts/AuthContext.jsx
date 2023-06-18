import { createContext, useState } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext({
    user: '',
    token: '',
    setUser: () => {},
    setTokens: () => {},
    eject: () => {},
})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        type: '',
    });
    const [token, setToken] = useState(null);
    console.log(token)

    const setTokens = (getToken) =>{
        setToken(getToken);
        if (
          getToken !== "" ||
          getToken !== null ||
          getToken !== undefined
        ) {
          Cookies.set("accessToken", getToken);
          return;
        } else {
          Cookies.remove("accessToken");
          return;
        }
    }

    const eject = () => {
        setToken(null)
        setUser(null)
        return
    }

    const value = {
        user,
        token,
        setUser,
        setTokens
    }
 
    return(
        <AuthContext.Provider value={{ user, setUser, token, setTokens, eject}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;