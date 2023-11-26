import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../index";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
