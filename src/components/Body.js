import React,{useEffect} from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import MovieShow from "./MovieShow";
const Body = () => {
 
  

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movieClip/watch",
      element:<MovieShow />
    }
  ]);

 

  return <RouterProvider router={appRouter} />;
};

export default Body;
