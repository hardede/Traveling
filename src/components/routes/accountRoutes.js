import Account from "../../pages/Account/Account";
import Details from "../../pages/Account/Details/Details";
import Orders from "../../pages/Account/Orders/Orders";
import Social from "../../pages/Account/Social/Social";

export const privateRoutes = [
  { path: "", element: <Account />, },
  { path: "/account/orders", element: <Orders />, },
  { path: "/account/my-details", element: <Details />,},
  { path: "/account/social-accounts", element: <Social />,},
];
