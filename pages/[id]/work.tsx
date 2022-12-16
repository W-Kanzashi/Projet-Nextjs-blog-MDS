import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
//API FETCH
import { useState, useEffect } from "react";
import UserLayout from "@/components/User/layout";

export default function RowAndColumnSpacing() {
  //API
  //title
  const [saveJoke, setSaveJoke] = useState({} as any);

  const handleUser = async () => {
    // API Handler
    // check the jwt token to see if the user is the owner of the page
    // Store the response of the api in data

    const data = await fetch("/api/workData", {
      method: "POST",
    });

    // Convert the string into json
    const content = await data.json();
    console.log(content);

    setSaveJoke(content);
  };

  console.log(saveJoke);

  useEffect(() => {
    handleUser();
  }, []);

  //console.log(saveJoke);
  return (
    <UserLayout>
      <Box sx={{ width: "100%" }}>
        <div style={{ padding: 30 }}>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            Welcome to your work board
          </h1>
        </div>

        <div className="container gap-10 mx-auto grid grid-cols-1 lg:grid-cols-2">
          {Object.keys(saveJoke).map((key, value) => {
            return (
              <div key={saveJoke[key]._id} className="bg-black/90 px-6 py-10">
                <div className="prose">
                  <h1 style={{ fontSize: "20px", color: "#00C5C8" }}>
                    {saveJoke[key].title}
                  </h1>
                  <p className="text-white">{saveJoke[key].text}</p>
                  <div>
                    <IconButton
                      aria-label="add to favorites"
                      style={{ backgroundColor: "#00C5C8" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      style={{ backgroundColor: "#00C5C8", margin: "1rem" }}
                    >
                      <ShareIcon />
                    </IconButton>{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Box>
    </UserLayout>
  );
}
