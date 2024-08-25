import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
    children: [
      {
        path: ':serviceId',
        element: <Contact />
      }
    ]
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
