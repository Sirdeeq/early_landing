import React from 'react'
import { useRoutes } from 'react-router-dom'
import App from './App'
import SignIn from './components/Sections/LogIn'

export default function AppNav() {
    let Pages = useRoutes([
        {
            path: '/', element : <App />
        },{
            path: '/sign_up', element: <SignIn />
        }
    ])
  return Pages
}
