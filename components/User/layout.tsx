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
