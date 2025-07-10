// React Components
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

// React App Import
import App from "./App";

// Tailwind CSS Import
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
<BrowserRouter>
    <App />
</BrowserRouter>
);