import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Password from "./User/password";

export default function EditUser(): JSX.Element {
  const [formValue, setFormValue] = useState(() => {
    return {
      name: "",
      email: "",
      photo: "",
    };
  });

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValue);

    const formData = new FormData();

    Object.entries(formValue).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch("/api/user", {
      method: "UPDATE",
      body: formData,
    });

    console.log(await response.json());
  };

  return (
    <>
      <Typography variant="h3" component="h3" className="mb-10">
        <span>Edit your personal information</span>
      </Typography>
      <Grid container spacing={2} className="mb-10">
        <Grid item xs={12} sm={2}>
          Edit your photo
          <Button variant="contained" fullWidth component="label">
            Upload
            <input
              hidden
              accept="image/*"
              name="image"
              id="image"
              type="file"
            />
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="name"
            label="Name"
            placeholder="Name"
            variant="outlined"
            fullWidth
            value={formValue.name}
            onChange={handleUserInfo}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="email"
            label="Email"
            placeholder="Email"
            variant="outlined"
            fullWidth
            value={formValue.email}
            onChange={handleUserInfo}
          />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Password />
        </Grid>
      </Grid>
    </>
  );
}
