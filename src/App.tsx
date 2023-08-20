import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Home />)
    },

    {
      path: "/secondpage",
      element: <SecondPage />
    }

  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
