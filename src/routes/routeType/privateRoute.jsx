import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import PrivateLayout from "../../layouts/PrivateLayout";
import AuthLayout from "../../layouts/AuthLayout";

// Route Views
import HomeView from "../../views/public/HomeView";
import AuthView from "../../views/public/AuthView";

export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    exact: true,
    layout: PrivateLayout,
    component: () => <Redirect to="/home" />
  },
  
  {
    path: "/profile",
    name: "Profile",
    layout: PrivateLayout,
    component: HomeView
  },

  {
    path: "/posts",
    name: "Posts",
    layout: PrivateLayout,
    component: HomeView
  },

];
