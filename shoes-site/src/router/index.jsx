import { createBrowserRouter } from "react-router-dom";
import Layoutrouter from "../pages/Home/layoutrouter";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import CategoryPage from "../pages/CategoryPage";
import PageProduct from "../components/pageProduct";
import Cart from "../components/Cart";
import Blog from "../pages/BlogMain";
import BlogInfoPage from "../pages/Blog-info";
import Media from "../pages/Media";
import About from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ScrollToTop from "../ScrollTop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutrouter />,

    children: [
      {
        index: true,
        element: (
          <>
            <ScrollToTop />
            <Home />,
          </>
        ),
      },
      {
        path: "/shop",
        element: (
          <>
            <ScrollToTop />
            <Shop />,
          </>
        ),
      },
      {
        path: "/category/:categoryName",
        element: (
          <>
            <ScrollToTop />
            <CategoryPage />,
          </>
        ),
      },
      {
        path: "/singleProductPage/:prodId",
        element: (
          <>
            <ScrollToTop />
            <PageProduct />,
          </>
        ),
      },
      {
        path: "/cart",
        element: (
          <>
            <ScrollToTop />
            <Cart />,
          </>
        ),
      },
      {
        path: "/blog",
        element: (
          <>
            <ScrollToTop />
            <Blog />,
          </>
        ),
      },
      {
        path: "/bloginfo/:blogId",
        element: (
          <>
            <ScrollToTop />
            <BlogInfoPage />,
          </>
        ),
      },
      {
        path: "/media",
        element: (
          <>
            <ScrollToTop />
            <Media />,
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <ScrollToTop />
            <About />,
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <ScrollToTop />
            <ContactUs />,
          </>
        ),
      },
    ],
  },
]);
