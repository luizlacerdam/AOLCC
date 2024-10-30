import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Layout from "./Components/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      ,
    ),
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;