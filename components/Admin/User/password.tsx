import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function Password(): JSX.Element {
  const [error, setError] = useState(() => {
    return {
      error: false,
      message: "",
    };
  });

  const [password, setPassword] = useState(() => {
    return {
      password: "",
      revalidatePassword: "",
    };
  });

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword({ ...password, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (password.password !== password.revalidatePassword) {
      console.log("Passwords don't match");
      setError({ error: true, message: "Passwords don't match" });
    }
  });

  return (
    <>
      <Typography variant="h4" component="h4" className="mb-10">
        <span>Change your password</span>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="password"
            label="Password"
            placeholder="Password"
            variant="outlined"
            fullWidth
            value={password.password}
            onChange={handlePassword}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            id="revalidatePassword"
            label="revalidatePassword"
            placeholder="Retype password"
            variant="outlined"
            fullWidth
            value={password.revalidatePassword}
            onChange={handlePassword}
          />
        </Grid>
      </Grid>
    </>
  );
}
