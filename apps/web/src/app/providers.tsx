"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    // "static" makes the dialog download the exported index instead of calling a
    // search server, which is what keeps the wiki deployable as static files.
    <RootProvider search={{ options: { type: "static" } }}>
      {children}
    </RootProvider>
  );
}
