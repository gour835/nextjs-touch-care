"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default ClientLayout;
