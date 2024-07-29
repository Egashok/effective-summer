import * as React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Caharacters } from './pages/characters';
import { Comics } from './pages/comics';
import { CharacterDetails } from './pages/character-details';
import { ComicsDetails } from './pages/comics-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/characters" />,
  },
  {
    path: '/characters',
    element: <Caharacters />,
  },
  {
    path: '/comics',
    element: <Comics />,
  },
  {
    path: '/characters/:id',
    element: <CharacterDetails />,
  },
  {
    path: '/comics/:id',
    element: <ComicsDetails />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
