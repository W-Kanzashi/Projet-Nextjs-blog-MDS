import { useContext, useState } from "react";
import { useRouter } from "next/router";
import WorkLayout from "@/components/User/layout";
import { EditMode } from "@/lib/EditContext";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import useSWR from "swr";

interface EditProps {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  formValue: {
    firstname: "";
    lastname: "";
    email: "";
    password: "";
  };
  setFormValue: (value: any) => {};
}

/**
 * Display the user's profile. If the user is the owner of the profile, display
 * the edit button. If the user click on the edit button, transform the text in form
 * input.
 * @returns JSX.Element
 */
export default function Profile(): JSX.Element {
  const { asPath } = useRouter();
  const { editMode, setEditMode, formValue, setFormValue } =
    useContext(EditMode);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValue.profile);
    const data = await fetch("/api/profile", {
      method: "UPDATE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue.profile),
    });

    const { content } = await data.json();

    setFormValue({
      ...formValue,
      profile: content.profile,
    });
  };

  const fetcher = async (url: string): Promise<any> => {
    const userId = "637e661c816431f4278be3e4";

    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),
    });

    const { content } = await data.json();

    console.log(content);

    setFormValue({
      ...formValue,
      profile: content.profile,
    });

    return content;
  };

  const { data, error } = useSWR("/api/profile", fetcher);

  if (error) return <div>Profile fail to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      {editMode === true ? (
        <WorkLayout>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="list"
              label="Outlined"
              fullWidth
              multiline
              value={formValue.profile}
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </WorkLayout>
      ) : (
        <WorkLayout>
          <div className="prose lg:prose-xl xl:prose-2xl">
            <p>{formValue.profile}</p>
          </div>
        </WorkLayout>
      )}
    </>
  );
}
