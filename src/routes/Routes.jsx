import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../layouts/Home/Home";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";
import Products from "../pages/products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from './privateRoutes/PrivateRoute';
import Overview from "../components/Dashboard/Overview";
import MyProducts from "../components/Dashboard/saller/MyProducts";
import AddProducts from "../components/Dashboard/saller/AddProducts";
import SallerRoute from "./privateRoutes/SallerRoute";
import BuyerRoute from "./privateRoutes/BuyerRoute";
import MyWhishList from "../components/Dashboard/buyer/MyWhishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  }, {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: '/dashboard/overview',
        element: <Overview></Overview>
      },
      {
        path: '/dashboard/my-products',
        element: <SallerRoute>
          <MyProducts></MyProducts>
        </SallerRoute>
      },
      {
        path: '/dashboard/whishlist',
        element: <BuyerRoute>
          <MyWhishList></MyWhishList>
        </BuyerRoute>
      },
      {
        path: '/dashboard/add-products',
        element: <SallerRoute>
          <AddProducts></AddProducts>
        </SallerRoute>
      },
    ]
  }
]);
export default router