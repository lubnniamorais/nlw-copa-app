import { createContext } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  
  async function signIn() {
    console.log('Entrou no contexto');
  }
  
  return(
    <AuthContext.Provider value={{
      signIn, 
      user: {
        name: 'Lubnnia',
        avatarUrl: 'https://github.com/lubnniamorais.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}


















