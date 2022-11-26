import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Password from "./User/password";

export default function EditUser(): JSX.Element {
  const [formData, setFormData] = useState(() => {
    return {
      name: "",
      email: "",
      photo: "",
    };
  });

  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.id]: event.target.value });
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
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="name"
            label="Name"
            placeholder="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
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
            value={formData.email}
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
