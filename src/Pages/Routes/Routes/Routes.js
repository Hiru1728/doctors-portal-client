import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Appointment/Appointment";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import MyAppointment from "../../Dashboard/MyAppointment/MyAppointment";
import Home from "../../Home/Home/Home";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])

export default router;