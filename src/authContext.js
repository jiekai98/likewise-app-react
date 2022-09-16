// src/AuthContext.js
import React, {useContext} from 'react'

const authContext = React.createContext()

export function AuthProvider({children, value}) {
  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(authContext)
}