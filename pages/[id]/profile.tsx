import { useContext, useState } from "react";
import WorkLayout from "@/components/User/layout";
import { EditMode } from "@/lib/EditContext";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface EditProps {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
}

/**
 * Display the user's profile. If the user is the owner of the profile, display
 * the edit button. If the user click on the edit button, transform the text in form
 * input.
 * @returns JSX.Element
 */
export default function Profile(): JSX.Element {
  const editModeContext: EditProps = useContext(EditMode);
  const [data, setData] = useState(() => {
    return {
      social:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi explicabo. Odit inventore asperiores quo atque illum nam hic? Tenetur aperiam vero labore praesentium quos quam rem laborum,eveniet illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi explicabo. Odit inventore asperiores quo atque illum nam hic? Tenetur aperiam vero labore praesentium quos quam rem laborum,eveniet illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi explicabo. Odit inventore asperiores quo atque illum nam hic? Tenetur aperiam vero labore praesentium quos quam rem laborum,eveniet illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi explicabo. Odit inventore asperiores quo atque illum nam hic? Tenetur aperiam vero labore praesentium quos quam rem laborum,eveniet illo.",
    };
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setData({ ...data, [event.target.id]: event.target.value });
  };

  return (
    <>
      {editModeContext.editMode === true ? (
        <WorkLayout>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="social"
              label="Outlined"
              fullWidth
              multiline
              value={data.social}
              onChange={handleChange}
              variant="outlined"
            />
          </Box>
        </WorkLayout>
      ) : (
        <WorkLayout>
          <div className="prose lg:prose-xl xl:prose-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi
            explicabo. Odit inventore asperiores quo atque illum nam hic?
            Tenetur aperiam vero labore praesentium quos quam rem laborum,
            eveniet illo.
          </div>
        </WorkLayout>
      )}
    </>
  );
}
