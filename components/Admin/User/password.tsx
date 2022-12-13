import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

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
    if (
      password.password !== password.revalidatePassword &&
      password.revalidatePassword.length > 0
    ) {
      console.log("Passwords don't match");
      setError({ error: true, message: "Passwords don't match" });
    }
    if (
      password.password === password.revalidatePassword &&
      password.revalidatePassword.length > 0
    ) {
      console.log("Passwords match");
      setError({ error: false, message: "" });
    }
  });

  return (
    <>
      <Typography variant="h4" component="h4">
        <span>Change your password</span>
      </Typography>
      <Stack spacing={1}>
        <Alert
          severity="error"
          className={error.error === true ? "visible" : "invisible"}
        >
          {error.message}
        </Alert>
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
              error={error.error}
              value={password.revalidatePassword}
              onChange={handlePassword}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            className="flex items-center justify-center"
          >
            <Button
              variant="contained"
              fullWidth
              className="bg-black text-white hover:bg-white hover:text-black"
              disabled={error.error || password.password.length === 0}
            >
              Change password
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
