import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Word Details | Capitech Dictionary",
};

const WordDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="lg:py-32 py-8 px-6">{children}</main>;
};

export default WordDetailsLayout;
