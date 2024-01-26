import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import NotFound404 from "./routes/NotFound404";
import Products from "./routes/Products";
import ProductSingle from "./routes/ProductSingle";
import Root from "./routes/Root";
import { store } from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <ProductSingle />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <NotFound404 />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
