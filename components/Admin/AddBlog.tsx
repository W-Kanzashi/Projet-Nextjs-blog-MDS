import { useState } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DisplayResult from "./DisplayResult";

export default function AddBlog(): JSX.Element {
  const [displayResult, setDisplayResult] = useState(() => {
    return false;
  });
  const [formData, setFormData] = useState(() => {
    return {
      title: "",
      content: "",
    };
  });

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <>
      <Stack direction="column" spacing={2}>
        <Button
          variant="contained"
          onClick={() => setDisplayResult(!displayResult)}
          className="bg-black hover:bg-white hover:text-black duration-300 ease-in-out text-white hover:border-black border-2"
        >
          Display result
        </Button>
        {displayResult === true ? (
          <DisplayResult title={formData.title} content={formData.content} />
        ) : (
          <Stack spacing={2}>
            <TextField
              id="title"
              label="Title"
              placeholder="Blog title"
              variant="outlined"
              fullWidth
              value={formData.title}
              onChange={handleContentChange}
            />

            <TextField
              id="content"
              label="Content"
              placeholder="Blog Content"
              variant="outlined"
              rows={5}
              multiline
              fullWidth
              value={formData.content}
              onChange={handleContentChange}
            />
          </Stack>
        )}
      </Stack>
    </>
  );
}
