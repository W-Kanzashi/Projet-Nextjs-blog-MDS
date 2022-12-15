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
  useEffect(() => {
    document.cookie =
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiX2lkIjoiNjM3ZTY2MWM4MTY0MzFmNDI3OGJlM2U0IiwiaWF0IjoxNTE2MjM5MDIyfQ.e7F0GYq4FpbmaVcUpOdFH6XfO3OHvusfsp5FFbi4tqI; path=/;";
  }, []);

  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-violet-300 via-violet-200 to-pink-300 h-56 w-full"></div>
        <div className="container mx-auto flex flex-col md:flex-row flex-1">
          {/* Sidebar */}
          <aside className="bg-fuchsia-100 w-full md:w-60"><Sidebar /></aside>
          <main className="flex-1">
            {/* Header */}
            <WorkHeader />
            {children}
          </main>
        </div>
      </section>
    </>
  );
}
