"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { LayoutProps } from "@/types";
import { WordDataContextProvider } from "@/contexts";

const queryClient = new QueryClient();

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WordDataContextProvider>{children}</WordDataContextProvider>
    </QueryClientProvider>
  );
};

export default DashboardLayout;
