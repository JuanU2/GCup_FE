import React, {createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import {check} from './api/sessionApi'
import App from './App.tsx'

export const AuthContext = createContext<any>(undefined);
export const AuthProvider = ({children}: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    if (!isAuthenticated) {
        check().then((data: boolean) => {
            if (data) {
                setIsAuthenticated(true);
                console.log("User is authenticated");
            }
        })
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          {children}
        </AuthContext.Provider>
      );
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
