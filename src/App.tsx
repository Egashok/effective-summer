import * as React from "react";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Caharacters } from "./pages/characters";
import { Comics } from "./pages/comics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Caharacters/>
  },
  {
    path:'/com',
    element: <Comics/>

  }
]);

function App() {

  return (
  <> 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

   </>
  )
}

export default App
