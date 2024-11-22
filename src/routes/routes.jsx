import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Products from "../pages/Products";
import Error from "../pages/Error";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import Overview from "../pages/dashboard/Overview";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import AddProducts from "../pages/dashboard/seller/AddProducts";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import MyWishlist from "../pages/dashboard/buyer/MyWishlist";
import AdminRoutes from "./AdminRoutes";
import UpdateProduct from "../pages/dashboard/seller/UpdateProduct";
import ProductDetails from "../pages/ProductDetails";
import MyCartlist from "../pages/dashboard/buyer/MyCartlist";
import AllUsersInfo from "../pages/dashboard/admin/AllUsersInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/ProductDetails/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/ProductDetails/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      //Buyer Routes
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <MyWishlist></MyWishlist>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/cartlist",
        element: (
          <BuyerRoute>
           <MyCartlist></MyCartlist>
          </BuyerRoute>
        ),
      },

      //Seller Routes
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoute>
            <AddProducts></AddProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/productUpdate/:id",
        element: (
          <SellerRoute>
            <UpdateProduct />
          </SellerRoute>
        ),
      },

      //Admin Routes
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoutes>
            <AllUsersInfo></AllUsersInfo>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
