import {Name, Email} from '../../types/General.types'
import React, {useState, createContext } from 'react'

export type AuthUser = {
    name: Name
    email: Email
}

type UserContextProviderProps = {
    children: React.ReactNode
}



type UserContextType = {
    user: AuthUser | null 
    loggedIn: boolean
    toggleLogin: () => void
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext( {} as UserContextType)


export const UserContextProvider = ({ children } : UserContextProviderProps) => {
    const [user,setUser] = useState<AuthUser | null>(null)
    const [loggedIn, setIsLoggedIn] = useState<boolean>(false)
    const toggleLogin = () => {
        setIsLoggedIn((prev)=>!prev)
    }
    return <UserContext.Provider value = {{user,loggedIn,toggleLogin,setUser}}> {children}</UserContext.Provider>
}