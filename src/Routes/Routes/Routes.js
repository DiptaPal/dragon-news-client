import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async() => {
                    return fetch('https://dragon-news-server-puce.vercel.app/news')
                }

            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: async({params}) => {
                   return fetch(`https://dragon-news-server-puce.vercel.app/category/${params.id}`)
                }
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: async({params}) => {
                    return fetch(`https://dragon-news-server-puce.vercel.app/news/${params.id}`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms-and-conditions',
                element: <TermsAndConditions></TermsAndConditions>,
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    }
]);