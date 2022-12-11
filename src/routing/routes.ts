import { ComponentType } from "react";

import AccountDetail from "pages/AccountDetailPage";
import Login from "pages/login/LoginPage";
import Home from "pages/HomePage";
import { paths } from "routing/paths";

interface AppRoute {
  path: string;
  component: ComponentType<any>;
  exact?: boolean;
}

const appRoutes: AppRoute[] = [
  {
    path: paths.ACCOUNT_DETAILS,
    component: AccountDetail,
  },
  {
    path: paths.LOGIN,
    component: Login,
  },
  {
    path: paths.HOME,
    component: Home,
    exact: true,
  },
];

export default appRoutes;
