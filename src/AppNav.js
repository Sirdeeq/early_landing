import React from 'react'
import { useRoutes } from 'react-router-dom'
import App from './App'
import SignIn from './components/Sections/LogIn'
import SignUp from './components/Sections/SignUp'

export default function AppNav() {
    let Pages = useRoutes([
        {
            path: '/', element : <App />
        },{
            path: '/sign_In', element: <SignIn />
        },{
            path: '/sign_up', element: <SignUp />
        }
    ])
  return Pages
}
