import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Mission from './Pages/Mission'
import Vision from './Components/Vision'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Industries from './Pages/Industries'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/Privacy'
import TermsOfService from './Pages/Terms'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/about/mission",
          element: <Mission />
        },
        {
          path: "/about/vision",
          element: <Vision />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/industries",
          element: <Industries />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/career",
          element: <Contact />
        },

      ]
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />
    },
    {
      path: "/terms-of-service",
      element: <TermsOfService />
    },
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App