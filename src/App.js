import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import CityDetail from "./components/CityDetail";
import { loader as cityDetailLoader } from "./components/CityDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/:city",
    element: <CityDetail />,
    loader: cityDetailLoader,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
