import { lazy } from "react";
import { Route } from "react-router-dom";

import LoaderFullPage from "./LoaderFullPage";

export const loginLoader = (
  <Route
    path="*"
    render={() => <LoaderFullPage message="Loading..." />}
  />
);

const publicRoutes = [
  {
    pageLink: "/signup",
    view: lazy(() => import("../components/Login/Signup")),
  },
  {
    pageLink: "/login",
    view: lazy(() => import("../components/Login/Login")),
  },
  {
    pageLink: "/notfound",
    view: lazy(() => import("./NotFound")),
  },


];

const privateRoutes = [
  {
    pageLink: "/",
    view: lazy(() => import("../components/Home/Home")),
  },
  {
    pageLink: "/restaurant/:restaurant_name",
    view: lazy(() => import("../components/Restaurants/SingleRestaurant")),
  },
  {
    pageLink: "/cart",
    view: lazy(() => import("../components/Cart/Cart")),
  },
  {
    pageLink: "/orders",
    view: lazy(() => import("../components/Order/Orders")),
  },
]

export const publicPages = publicRoutes.map((page, indx) => (
  <Route exact path={page.pageLink} component={page.view} key={indx} />
));

export const privatePages = privateRoutes.map((page, indx) => (
  <Route exact path={page.pageLink} component={page.view} key={indx} />
));
