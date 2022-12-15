import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import profilePick from "/public/aerial-shot-beautiful-tree-forest-covered-with-fog-bled-slovenia.jpg";
// <a href="https://www.freepik.com/free-photo/aerial-shot-beautiful-tree-forest-covered-with-fog-bled-slovenia_9184586.htm#query=aesthetic%20background&position=3&from_view=keyword">Image by wirestock</a> on Freepik

export default function Sidebar(): JSX.Element {
    return (
        <>
            <nav>
                <ol>
                    <a>
                        <li className="container py-3 px-4 mx-auto flex flex-row">
                            <div className="relative m-1 h-18 w-20 bg-black rounded-full overflow-hidden">
                                {/* profile picture */}
                                <Image
                                    src={profilePick}
                                    alt="Aerial shot of a beautiful tree in a forest covered with fog in Bled, Slovenia"
                                    className="bg-cover"
                                    priority={true}
                                />
                            </div>
                            <div>
                                {/* name */}
                                <p className="text-lg py-6">Lorem, ipsum.</p>
                            </div>
                        </li>
                    </a>
                    <a>
                        <li className="container py-3 px-4 mx-auto flex flex-row">
                            <div className="relative m-1 h-18 w-20 bg-black rounded-full overflow-hidden">
                                {/* profile picture */}
                                <Image
                                    src={profilePick}
                                    alt="Aerial shot of a beautiful tree in a forest covered with fog in Bled, Slovenia"
                                    className="bg-cover"
                                    priority={true}
                                />
                            </div>
                            <div>
                                {/* name */}
                                <p className="text-lg py-6">Lorem, ipsum.</p>
                            </div>
                        </li>
                    </a>
                    <a>
                        <li className="container py-3 px-4 mx-auto flex flex-row">
                            <div className="relative m-1 h-18 w-20 bg-black rounded-full overflow-hidden">
                                {/* profile picture */}
                                <Image
                                    src={profilePick}
                                    alt="Aerial shot of a beautiful tree in a forest covered with fog in Bled, Slovenia"
                                    className="bg-cover"
                                    priority={true}
                                />
                            </div>
                            <div>
                                {/* name */}
                                <p className="text-lg py-6">Lorem, ipsum.</p>
                            </div>
                        </li>
                    </a>
                    <a>
                        <li className="container py-3 px-4 mx-auto flex flex-row">
                            <div className="relative m-1 h-18 w-20 bg-black rounded-full overflow-hidden">
                                {/* profile picture */}
                                <Image
                                    src={profilePick}
                                    alt="Aerial shot of a beautiful tree in a forest covered with fog in Bled, Slovenia"
                                    className="bg-cover"
                                    priority={true}
                                />
                            </div>
                            <div>
                                {/* name */}
                                <p className="text-lg py-6">Lorem, ipsum.</p>
                            </div>
                        </li>
                    </a>
                </ol>
            </nav>
        </>
    );
}