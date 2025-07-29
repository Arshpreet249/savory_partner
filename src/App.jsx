import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { AddStore } from './pages/AddStore';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';
import PendingOrders from './pages/PendingOrders';
import UpdateStatus from './pages/UpdateStatus';


function App() {
  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem('accessToken') || null;
  });

  const router = createBrowserRouter([
  {
    path: '/',
    element: <Login setAccessToken={setAccessToken} />
  },
  {
    path: '/home',
    element: <ProtectedRoute><Home /></ProtectedRoute>,
    children: [
      { index: true, element: <Dashboard /> },          
      { path: 'profile', element: <Profile /> },        
      { path: 'add-store', element: <AddStore /> },
      {path:'pending-orders', element:<PendingOrders/>},
      {path:'update-status',element:<UpdateStatus/>}   
    ]
  }
]);


  return <RouterProvider router={router} />;
  
}

export default App;

