import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './componant/Body/Body';
import Main from './componant/Main/Main';
import Order from './componant/Order/Order';
import Inventory from './componant/Inventory/Inventory';
import Login from './componant/Login/Login';
import { LoadApi } from './api/LoadApi/LoadApi';
import SignUp from './componant/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: LoadApi,
          element: <Body></Body>
        },
        {
          path: '/shop',
          loader: LoadApi,
          element: <Body></Body>
        },
        {
          path: '/order',
          loader: LoadApi,
          element: <Order></Order>
        },
        { path: '/inventory', element: <Inventory></Inventory> },
        { path: '/log-in', element: <Login></Login>, },
        { path: '/signup', element: <SignUp></SignUp> },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
