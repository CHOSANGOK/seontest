import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/Error/NotFound";
import App from "@/App.jsx";
import Login from "@/pages/Auth/Login.jsx";
import Register from "@/pages/Auth/Register.jsx";
import VideoLibrary from "@/pages/VideoLibrary/VideoLibrary";
import VideoDetail from "./pages/VideoLibrary/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "videoLibrary", element: <VideoLibrary /> },
      { path: "video/:id", element: <VideoDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
