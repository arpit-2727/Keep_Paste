import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./components/Homepage"
import Paste from "./components/Keeps"
import Viewkeeps from "./components/Viewkeeps"
import Navbar from "./components/Navbar"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Homepage />
      </div>
    },
    {
      path:"/pastes",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Paste/>
    </div>
    },
    {
      path:"/pastes/:id",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Viewkeeps/>
    </div>,
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
