import { createContext, useContext } from "react";
import User from "../models/user";

interface IUserContext {
    user?: User
}

export const UserContext = createContext<IUserContext>({})

export const useUser = () => useContext(UserContext)
