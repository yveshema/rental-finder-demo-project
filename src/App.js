import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import { config } from "./routes/config";

const routes = createRoutesFromElements(config);
const router = createBrowserRouter(routes);

import "./styles.css";

export default function App() {
  return <RouterProvider router={router} />;
}
