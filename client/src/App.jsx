import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Landing,
  Error,
  Addjob,
  Admin,
  Deletejob,
  Stats,
  AllJobs,
  Profile,
} from './pages'

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme
}

checkDefaultTheme()

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children:[
      {
        //default route
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index:true,
            element: <Addjob />
          },
          {
            path: 'stats',
            element: <Stats />
          },
          {
            path: 'all-jobs',
            element: <AllJobs />
          },  
          {        
            path: 'profile',
            element: <Profile />
          },
          {        
            path: 'admin',
            element: <Admin />
          }
        ]
      },
      {
        path: 'addjob',
        element: <Addjob />
      },
      {
        path: 'admin',
        element: <Admin />
      },
      {
        path: 'deletejob',
        element: <Deletejob />
      },

    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App