import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import { CurrentTodo } from './components/CurrentTodo';
import { TodosContextProvider } from './context/TodosContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/todos",
    element: <App />,
  },
  {
    path: "/todos/:idOfTodo",
    element: <CurrentTodo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodosContextProvider>
      <RouterProvider router={router} />
    </TodosContextProvider>
  </React.StrictMode>
);
