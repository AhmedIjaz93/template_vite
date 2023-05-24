import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { ToastContainer } from "react-toastify";

import App from './App';
import Loader from './components/general/loader/loader.spinner';

import "react-toastify/dist/ReactToastify.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
          <ToastContainer hideProgressBar theme="colored" autoClose={false} />
        </BrowserRouter>
      </PersistGate>
    </Provider>

  </React.StrictMode>
);

