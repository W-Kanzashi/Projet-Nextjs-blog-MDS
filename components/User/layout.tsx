import { ReactNode } from "react";

import WorkHeader from "./header";

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
  // userId : 26387126387126387126831
  const user =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiX2lkIjoiMjYzODcxMjYzODcxMjYzODcxMjY4MzEiLCJpYXQiOjE1MTYyMzkwMjJ9.o8ZMZHZnKe87MiQlZsMwGgVlv6Nfvm4FEDUPIkaf41Y";

  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-violet-300 via-violet-200 to-pink-300 h-56 w-full"></div>
        <div className="container mx-auto">
          {/* Header */}
          <WorkHeader />
          {children}
        </div>
      </section>
    </>
  );
}
