import { Fragment } from "react";
import type { LayoutProps } from "@/types";
import { NavBar } from "@/components";

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <NavBar />

      <main className="p-6">{children}</main>
    </Fragment>
  );
};

export default DashboardLayout;
