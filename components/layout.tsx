import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <>
      <main className="min-h-screen m-0 p-0 bg-gradient-to-r from-violet-300 via-violet-200 to-pink-300">{children}</main>
    </>
  );
}
