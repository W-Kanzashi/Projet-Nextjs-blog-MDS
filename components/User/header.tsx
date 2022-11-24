import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import profilePick from "/public/aerial-shot-beautiful-tree-forest-covered-with-fog-bled-slovenia.jpg";
// <a href="https://www.freepik.com/free-photo/aerial-shot-beautiful-tree-forest-covered-with-fog-bled-slovenia_9184586.htm#query=aesthetic%20background&position=3&from_view=keyword">Image by wirestock</a> on Freepik

import { EditMode } from "@/lib/EditContext";
import Button from "@mui/material/Button";
import DialogEdit from "./dialogEdit";

export default function WorkHeader(): JSX.Element {
  const router = useRouter();
  const { editMode, setEditMode, openDialog, setOpenDialog } =
    useContext(EditMode);

  const path = router.asPath.split("/")[2];
  const userId = "asojikdhkajshdkjabdkj";

  const handleEditMode = () => {
    if (editMode === true) {
      setOpenDialog(true);
    } else {
      setEditMode(true);
    }
  };

  return (
    <>
      <header className="">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-8 justify-start">
            <div className="relative -translate-y-14 h-32 w-32 bg-black rounded-full overflow-hidden">
              <Image
                src={profilePick}
                alt="Aerial shot of a beautiful tree in a forest covered with fog in Bled, Slovenia"
                className="bg-cover"
                priority={true}
              />
            </div>
            <h2 className="text-4xl">Lorem, ipsum.</h2>
          </div>
          <div className="">
            <Button
              variant="outlined"
              className="bg-black text-white hover:text-black hover:bg-white duration-300 ease-in-out"
              onClick={handleEditMode}
            >
              {editMode === true ? "Save" : "Edit"}
            </Button>
          </div>
        </div>
        <div className="mb-10">
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
          </ul>
        </div>
      </header>
      <DialogEdit open={openDialog} />
    </>
  );
}
