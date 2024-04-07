import Home from "./home/homepage";
import {  createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", element: <Home/> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
