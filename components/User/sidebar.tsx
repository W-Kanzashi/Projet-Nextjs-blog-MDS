import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import profilePick from "/public/aerial-shot-beautiful-tree-forest-covered-with-fog-bled-slovenia.jpg";
// <a href="https://www.freepik.com/free-photo/aerial-shot-beautiful-tree-forest-covered-with-fog-bled-slovenia_9184586.htm#query=aesthetic%20background&position=3&from_view=keyword">Image by wirestock</a> on Freepik

export default function Sidebar(): JSX.Element {
  return (
    <>
      <aside className="fixed min-h-screen w-1/4 bg-white shadow-xl py-10 px-4 left-0 top-0 z-50">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Liste des utilisateurs
        </h2>
        <ol>
          <li className="container py-3 px-4 mx-auto flex flex-row items-center justify-around gap-6">
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
              <p className="text-lg">Lorem, ipsum.</p>
            </div>
          </li>
          <li className="container py-3 px-4 mx-auto flex flex-row items-center justify-around gap-6">
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
              <p className="text-lg">Lorem, ipsum.</p>
            </div>
          </li>
          <li className="container py-3 px-4 mx-auto flex flex-row items-center justify-around gap-6">
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
              <p className="text-lg">Lorem, ipsum.</p>
            </div>
          </li>
          <li className="container py-3 px-4 mx-auto flex flex-row items-center justify-around gap-6">
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
              <p className="text-lg">Lorem, ipsum.</p>
            </div>
          </li>
          <li className="container py-3 px-4 mx-auto flex flex-row items-center justify-around gap-6">
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
              <p className="text-lg">Lorem, ipsum.</p>
            </div>
          </li>
        </ol>
      </aside>
    </>
  );
}
