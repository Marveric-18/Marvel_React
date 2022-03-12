import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import PublicLayout from "../../layouts/PublicLayout";
import AuthLayout from "../../layouts/AuthLayout";

// Route Views
import HomeView from "../../views/public/HomeView";
import AuthView from "../../views/public/AuthView";

export default [
  {
    path: "/",
    exact: true,
    layout: PublicLayout,
    component: () => <Redirect to="/home" />
  },
  
  {
    path: "/home",
    layout: PublicLayout,
    component: HomeView
  },

  
  
];
