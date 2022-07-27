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
      pageLink: "/",
      view: lazy(() => import("../components/Home/Home")),
    },
    {
      pageLink: "/restaurant/:restaurant_id",
      view: lazy(() => import("../components/Restaurants/SingleRestaurant")),
    },
    {
      pageLink: "/cart",
      view: lazy(() => import("../components/Cart/Cart")),
    },
    {
      pageLink: "/notfound",
      view: lazy(() => import("./NotFound")),
    },
    
    
];

export const publicPages = publicRoutes.map((page, indx) => (
    <Route exact path={page.pageLink} component={page.view} key={indx} />
));
