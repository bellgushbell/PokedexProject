import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/home'
import DetailPage from '@/pages/detail'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/detail/:name",
      element: (
        < DetailPage />
      ),
    },
  ]);


  return (
    <div className="bg-[url('/images/list_bg.jpg')] min-h-[100vh]">
      < RouterProvider router={router} />
    </div>
  )
}

export default App
