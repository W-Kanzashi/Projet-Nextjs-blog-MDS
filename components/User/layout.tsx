import { ReactNode, useEffect } from "react";

import WorkHeader from "./header";
import Sidebar from "./sidebar";

/**
 * Layout of the user page
 * @param children ReactNode
 * @returns JSX.Element
 */
export default function WorkLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-300 via-violet-200 to-pink-300 h-56 w-full"></div>
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />
        <main className="left-1/4 relative w-3/4">
          {/* Header */}
          <WorkHeader />
          {children}
        </main>
      </div>
    </>
  );
}
