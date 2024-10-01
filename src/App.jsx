import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/root";
import Intro from "./pages/intro";
import Projects from "./pages/projects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Intro /> },
        { path: "projects", element: <Projects /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
