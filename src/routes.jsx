import { createBrowserRouter } from "react-router-dom";

import {Home} from './pages/Home'
import { SignUp } from "./pages/signUp";
import { SignIn } from "./pages/signIn";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/signin',
        element: <SignIn/>,
    },
    {
        path:'/signup',
        element: <SignUp/>,
    },
])