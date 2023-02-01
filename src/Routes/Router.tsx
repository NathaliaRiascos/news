import App from '../App';
import {
  createBrowserRouter
} from "react-router-dom";
import { Home, Article } from '../pages/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Article />,
  },
]);

export default router