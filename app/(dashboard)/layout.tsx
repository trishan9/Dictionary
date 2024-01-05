"use client";

import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { LayoutProps } from "@/types";
import { NavBar } from "@/components";
import { WordDataContextProvider } from "@/contexts";

const queryClient = new QueryClient();

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <NavBar />

      <QueryClientProvider client={queryClient}>
        <WordDataContextProvider>
          <main className="p-6">{children}</main>
        </WordDataContextProvider>
      </QueryClientProvider>
    </Fragment>
  );
};

export default DashboardLayout;
