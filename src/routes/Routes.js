import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './../componants/Login';
import Register from '../componants/Register';
import Main from '../Layout/Main';
import Blog from '../componants/Blog';
import NotFound404 from '../componants/NotFound404/NotFound404';
import Service from '../componants/Service/Service';
import SeeMore from '../componants/SeeMore/SeeMore';
import Home from '../Layout/Home/Home';
import PrivetRoute from './PrivetRoute';
import Review from '../componants/Review/Review';
import MyReview from '../componants/MyReview/MyReview';
import AddService from '../componants/Service/AddService/AddService';
import DashbordLayout from '../Layout/DashbordLayout/DashbordLayout';
// import Dashbord from '../Layout/Dashbord/Dashbord';
import MyBooking from '../Layout/Dashbord/MyBooking';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/services/:id',
                    element: <Service></Service>,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                {
                    path: '/seemore/:id',
                    element: <SeeMore></SeeMore>,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '*',
                    element: <NotFound404></NotFound404>
                },
                {
                    path: '/addservice',
                    element: <AddService></AddService>
                },
                {
                    path: '/myreview',
                    element: <PrivetRoute><MyReview></MyReview></PrivetRoute>
                },
                {
                    path: '/review',
                    element: <PrivetRoute> <Review></Review> </PrivetRoute>,
                }

            ]
        },
        {
            path: "/dashbord",
            element: <PrivetRoute><DashbordLayout></DashbordLayout> </PrivetRoute>,
            children: [
                {
                    path: '/dashbord',
                    element: <MyBooking></MyBooking>
                }
            ]
        }

    ]);


    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;