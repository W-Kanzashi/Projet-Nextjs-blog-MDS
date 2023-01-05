import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import Loading from "@/components/Loading/loading";
import profilePick from "/public/aerial-shot-beautiful-tree-forest-covered-with-fog-bled-slovenia.jpg";
// <a href="https://www.freepik.com/free-photo/aerial-shot-beautiful-tree-forest-covered-with-fog-bled-slovenia_9184586.htm#query=aesthetic%20background&position=3&from_view=keyword">Image by wirestock</a> on Freepik

export default function Sidebar(): JSX.Element {

  const fetcher = async (url: string) => {

    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const { content } = await data.json();
    return content;
  }

  const { data, error } = useSWR("/api/user", fetcher);
  if (error) return <div>user liset fail to load</div>;
  if (!data) return <Loading />;

  console.log(data);

  return (
    <>
      <aside className="fixed min-h-screen w-1/4 bg-white shadow-xl py-10 px-4 left-0 top-0 z-50">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Liste des utilisateurs
        </h2>
        <ol>
        {Object.keys(data).map((key) => {
          return (
          <li className="container py-3 px-4 mx-auto flex flex-row items-center justify-around gap-6" key={key}>
            <div className="relative h-20 w-20 bg-black rounded-full overflow-hidden">
              {/* profile picture */}
              <Image
                src={profilePick}
                alt="Aerial shot of a beautiful tree in a forest covered with fog in Bled, Slovenia"
                className="object-cover h-full w-full"
                priority={true}
              />
            </div>
            <div>
              {/* name */}
              <p className="text-lg">{data[key].surname} {data[key].name}</p>
            </div>
          </li>
          );
        })}
        </ol>
      </aside>
    </>
  );
}
