import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

import HeaderNavLoading from "@/components/Loading/header-nav-loading";

const fetcher = async (url: string): Promise<any> => {
  const user = document.cookie;
  const token = user.split("=")[1];

  console.log("token : " + token);

  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  });

  const decoded = await data.json();

  return decoded;
};

export default function HeaderLink(): JSX.Element {
  const { asPath } = useRouter();

  const path = asPath.split("/")[2];
  const userId = "637e661c816431f4278be3e4";

  const { data, error } = useSWR("/api/jwt", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <HeaderNavLoading />;

  return (
    <>
      <ul className="flex flex-row gap-6">
        <li
          className={
            (path === "profile"
              ? "underline underline-offset-8 decoration-4 decoration-black"
              : "") + " text-2xl"
          }
        >
          <Link href="/[id]/profile" as={`/${userId}/profile`}>
            Profile
          </Link>
        </li>
        <li
          className={
            (path === "work"
              ? "underline underline-offset-8 decoration-4 decoration-black"
              : "") + " text-2xl"
          }
        >
          <Link href="/[id]/work" as={`/${userId}/work`}>
            Work
          </Link>
        </li>
        <li
          className={
            (path === "contact"
              ? "underline underline-offset-8 decoration-4 decoration-black"
              : "") + " text-2xl"
          }
        >
          <Link href="/[id]/contact" as={`/${userId}/contact`}>
            Contact
          </Link>
        </li>
        {data._id === userId && (
          <li
            className={
              (path === "admin"
                ? "underline underline-offset-8 decoration-4 decoration-black"
                : "") + " text-2xl"
            }
          >
            <Link href="/[id]/admin" as={`/${userId}/admin`}>
              Admin
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
