import React, { createContext, useContext, ReactNode } from 'react';
import CadastroDTO from '../service/Auth/SingupDTO';
import LoginDTO from '../service/Auth/LoginDTO';
import AuthService from '../service/Auth/AuthService';
interface AuthContextProps {
  user: { email: string } | null; 
  cadastrar: (data: CadastroDTO) => Promise<void>; 
  logar: (data: LoginDTO) => Promise<void>; 
  logout: () => void; 
}


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode; 
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<{ email: string } | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const cadastrar = async (data: CadastroDTO) => {
    await AuthService.cadastrar(data);
  };

  const logar = async (data: LoginDTO) => {
    await AuthService.logar(data);
    const storedUser = localStorage.getItem('user');
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, cadastrar, logar, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
