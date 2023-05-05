import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './main.css'

import Root from './routes/Root-route'
import Item from './routes/Item-route';
import Checkout from './routes/Checkout-route';
import ErrorPage from './routes/Error-page-route';
import Layout from './components/Layout/Layout';
import { CustomProvider } from './context/context';
import CartPage from './components/Cart/CartPage';
import Admin from './routes/Admin';
import Users from './routes/Users';
import ProductForm from './components/Form/ProductForm';
import ProductFormEdit from './components/Form/ProductFormEdit';
import ItemListEdit from './components/ItemList/ItemListEdit';

const firebaseConfig = {
  apiKey: "AIzaSyBr5dN3KNlQONtu_BDA_QFQwcmFQBMjNj0",
  authDomain: "react-coderhouse-f0283.firebaseapp.com",
  projectId: "react-coderhouse-f0283",
  storageBucket: "react-coderhouse-f0283.appspot.com",
  messagingSenderId: "89725916726",
  appId: "1:89725916726:web:be94c7b3b86e387bfb2a97",
  measurementId: "G-C6YPNCP124"
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root /> ,
        errorElement: <ErrorPage />
      },
      {
        path: "/categories/:category",
        element:  <Root />,
      },
      {
        path: "/item/:id",
        element: <Item /> ,
      },
      {
        path: "/cart",
        element: <CartPage> </CartPage>
      },
      {
        path: "/checkout",
        element: <Checkout /> 
      },
      {
        path: "/auth",
        element: <Users /> 
      },
      {
        path: "/sign-up",
        element: <Users /> 
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/items/add",
        element:  <ProductForm />
      },
      {
        path: "/items/edit",
        element:  <ItemListEdit edit={"true"}/>
      },
      {
        path: "/item/:id/edit",
        element:  <ProductFormEdit/>
      },
      {
        path: "/items/delete",
        element:  <ProductForm />
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={ router }  />
    </CustomProvider>
  </React.StrictMode>,
)

