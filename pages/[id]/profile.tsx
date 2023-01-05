import { useContext } from "react";
import WorkLayout from "@/components/User/layout";
import { EditMode } from "@/lib/EditContext";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Loading from "@/components/Loading/loading";

import useSWR from "swr";

/**
 * Display the user's profile. If the user is the owner of the profile, display
 * the edit button. If the user click on the edit button, transform the text in form
 * input.
 * @returns JSX.Element
 */
export default function Profile(): JSX.Element {
  const { editMode, formValue, setFormValue, handleChange } =
    useContext(EditMode);

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

    setFormValue({
      ...formValue,
      _id: content._id,
      name: content.name,
      email: content.email,
      profile: content.profile,
    });

    return content;
  };

  const { data, error } = useSWR("/api/profile", fetcher);

  if (error) return <div>Profile fail to load</div>;
  if (!data) return <Loading />;

  return (
    <>
      {editMode === true ? (
        <WorkLayout>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="list"
              name="profile"
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
