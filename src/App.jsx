import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components";
import { Home, Cart,  Registration, SignIn } from "./pages";
import { getProducts } from "./api/api";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={getProducts} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
