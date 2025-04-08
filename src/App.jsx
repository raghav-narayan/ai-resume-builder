import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './custom/Header'
import { Toaster } from './components/ui/sonner'

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null; // or show a loading spinner

  if (!isSignedIn) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <>
      <Header/>
      <Outlet /> {/* Renders nested routes */}
      <Toaster/>
    </>
  );
}


export default App
