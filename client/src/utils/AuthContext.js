import { createContext } from "react";

const AuthContext = createContext({
    loggedIn: false,
    id: 0
});

export { AuthContext };
