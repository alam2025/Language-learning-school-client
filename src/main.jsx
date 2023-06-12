import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeProvider from './provider/ThemeProvider.jsx'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
       
          <RouterProvider router={router}></RouterProvider>
        
      </ThemeProvider>
    </QueryClientProvider>
  </AuthProvider>
)
