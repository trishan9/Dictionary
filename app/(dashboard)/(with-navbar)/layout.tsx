import { Fragment } from "react";
import type { LayoutProps } from "@/types";
import { NavBar } from "@/components";

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <NavBar />

      <main className="px-5 py-0">{children}</main>
    </Fragment>
  );
};

export default DashboardLayout;
