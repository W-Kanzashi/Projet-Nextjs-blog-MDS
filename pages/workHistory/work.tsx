// import * as React from "react"; //import all of react 
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { pink } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import { cyan } from "@mui/material/colors";
import { orange } from "@mui/material/colors";
import { indigo } from "@mui/material/colors";
import { teal } from "@mui/material/colors";

//Hooks for the API 
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from 'next/router';

//*!end update form const*/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#000" : "#ccc",//if it's light, then it's black, otherwise it's grey
  ...theme.typography.body2, // it inherits a typography 
  padding: theme.spacing(1),
  textAlign: "justify",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  //API
  //title

  //*!form to update the work history*/
  const [formValue, setFormValue] = useState(() => {
    return {
      title: "",
      text: "",
    };
  });
  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };

  //excution when I click on the validate button
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValue);

    const formData = new FormData();

    Object.entries(formValue).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch("/api/workData", {
      method: "UPDATE",
      body: formData,
    });

    console.log(await response.json());
  };
  //*!end/
  const [saveJoke0, setSaveJoke0] = useState("");
  const [saveJoke1, setSaveJoke1] = useState("");
  const [saveJoke2, setSaveJoke2] = useState("");
  const [saveJoke3, setSaveJoke3] = useState("");
  const [saveJoke4, setSaveJoke4] = useState("");
  const [saveJoke5, setSaveJoke5] = useState("");
  //text
  const [saveText0, setSaveText0] = useState("");
  const [saveText1, setSaveText1] = useState("");
  const [saveText2, setSaveText2] = useState("");
  const [saveText3, setSaveText3] = useState("");
  const [saveText4, setSaveText4] = useState("");
  const [saveText5, setSaveText5] = useState("");

  const handleUser = async () => {
    // API Handler
    // check the jwt token to see if the user is the owner of the page
    // Store the response of the api in data

    const data = await fetch("/api/workData", {
      method: "GET",
    });

    // Convert the string into json
    const decoded = await data.json();
    console.log(decoded); //

    // title Save the data in a useState function
    // useState

    setSaveJoke0(decoded[0].title);
    setSaveJoke1(decoded[1].title);
    setSaveJoke2(decoded[2].title);
    setSaveJoke3(decoded[3].title);
    setSaveJoke4(decoded[4].title);
    setSaveJoke5(decoded[5].title);
    // title Save the data a useState function
    setSaveText0(decoded[0].text);
    setSaveText1(decoded[1].text);
    setSaveText2(decoded[2].text);
    setSaveText3(decoded[3].text);
    setSaveText4(decoded[4].text);
    setSaveText5(decoded[5].text);

    // async function
  };
  useEffect(() => {
    handleUser();
  }, []);
//verify if the user is an admin
//useState is a React Hook that lets you add a state variable to your component.
//the user is not an admin in the first place 
//verify if he is admin , if it is true, then set isAdmin to true
   const router = useRouter()
   const [isAdmin, setIsAdmin] = useState(() => {
     return false;
   });
// condition
  console.log(router.pathname);
  const userId = "639dd629ca2b121f57c65960"; // got it from the database, table user
  // if the id user in the url corresponds to the user id , then then the user is an admin
  // split is a method used to split the url or routerpathname
  const token = router.pathname.split("/")[2];
   console.log("token : " + token);
 useEffect(() => {
   if (router.pathname === userId) {
     setIsAdmin(true);
      
    }
  }, []);
  //console.log(saveJoke);
  return (
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

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={5}>
          <Item>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: cyan[500] }} aria-label="recipe">
                  IC
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Design rules"
              subheader="September 14, 2016"
            />

            <CardMedia
              component="img"
              height="194"
              image="/sebastien.webp"
              alt="Paella dish"
            />

            <Item>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveJoke1}
                onChange={(e) => setSaveJoke1(e.target.value)}
              />

              <h1 style={{ fontSize: "20px", color: "#00C5C8" }}>
                {saveJoke1}
              </h1>
              <TextField className="text-white"
                id="text"
                label="Text"
                placeholder="text"
                variant="outlined"
                fullWidth
                value={saveText1}
                onChange={(e) => setSaveText1(e.target.value)}
              />
              <p>{saveText1}</p>
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
            </Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: yellow[600] }} aria-label="recipe">
                  IC
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Design design"
              subheader="September 14, 2016"
            />

            <CardMedia
              component="img"
              height="194"
              image="/keanui.webp"
              alt="Paella dish"
            />

            <Item>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveJoke2}
                onChange={(e) => setSaveJoke2(e.target.value)}
              />
              <h1 style={{ fontSize: "20px", color: "#ffeb3b" }}>
                {saveJoke2}
              </h1>
              <TextField className="text-white"
                id="text"
                label="Text"
                placeholder="text"
                variant="outlined"
                fullWidth
                value={saveText2}
                onChange={(e) => setSaveText2(e.target.value)}
              />
              <p>{saveText2}</p>
              <div>
                {" "}
                <IconButton
                  aria-label="add to favorites"
                  style={{ backgroundColor: "#ffeb3b" }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{ backgroundColor: "#ffeb3b", margin: "1rem" }}
                >
                  <ShareIcon />
                </IconButton>
              </div>
            </Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: pink[500] }} aria-label="recipe">
                  IC
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Design trends"
              subheader="September 14, 2016"
            />

            <CardMedia
              component="img"
              height="194"
              image="/jhon.webp"
              alt="Paella dish"
            />

            <Item>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveJoke3}
                onChange={(e) => setSaveJoke3(e.target.value)}
              />
              <h1 style={{ fontSize: "20px", color: "#fa0089" }}>
                {saveJoke3}
              </h1>
              <TextField className="text-white"
                id="text"
                label="Text"
                placeholder="text"
                variant="outlined"
                fullWidth
                value={saveText3}
                onChange={(e) => setSaveText3(e.target.value)}
              />
              <p>{saveText3}</p>
              <div>
                <IconButton
                  aria-label="add to favorites"
                  style={{ backgroundColor: "#fa0089" }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{ backgroundColor: "#fa0089", margin: "1rem" }}
                >
                  <ShareIcon />
                </IconButton>
              </div>
            </Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
                  IC
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Design creteria"
              subheader="September 14, 2016"
            />

            <CardMedia
              component="img"
              height="194"
              image="/jack.webp"
              alt="jack"
            />

            <Item>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveJoke4}
                onChange={(e) => setSaveJoke4(e.target.value)}
              />

              <h1 style={{ fontSize: "20px", color: "#009688" }}>
                {saveJoke4}
              </h1>
               <TextField className="text-white"
                id="text"
                label="Text"
                placeholder="text"
                variant="outlined"
                fullWidth
                value={saveText4}
                onChange={(e) => setSaveText4(e.target.value)}
              />
              <p>{saveText4}</p>
              <div>
                <IconButton
                  aria-label="add to favorites"
                  style={{ backgroundColor: "#009688", margin: "1rem" }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{ backgroundColor: "#009688" }}
                >
                  <ShareIcon />
                </IconButton>
              </div>
            </Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
                  IC
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Design draft"
              subheader="September 14, 2016"
            />

            <CardMedia
              component="img"
              height="194"
              image="/kylie.webp"
              alt="Paella dish"
            />

            <Item>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveJoke5}
                onChange={(e) => setSaveJoke5(e.target.value)}
              />
              <h1 style={{ fontSize: "20px", color: "#3f51b5" }}>
                {saveJoke5}
              </h1>
               <TextField className="text-white"
                id="text"
                label="Text"
                placeholder="text"
                variant="outlined"
                fullWidth
                value={saveText5}
                onChange={(e) => setSaveText5(e.target.value)}
              />
              <p>{saveText5}</p>
              <div>
                <IconButton
                  aria-label="add to favorites"
                  style={{ backgroundColor: "#3f51b5", margin: "1rem" }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{ backgroundColor: "#3f51b5" }}
                >
                  <ShareIcon />
                </IconButton>
              </div>
            </Item>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
                  IC
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Design pattern"
              subheader="September 14, 2016"
            />

            <CardMedia
              component="img"
              height="194"
              image="/Ihssane.webp"
              alt="Paella dish"
            />

            <Item>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveJoke0}
                onChange={(e) => setSaveJoke0(e.target.value)}
              />
              
              <h1 style={{ fontSize: "20px", color: "#ff9800" }}>
                {saveJoke0}
              </h1>
             
               <TextField className="text-white"
                id="text"
                label="Text"
                placeholder="text"
                variant="outlined"
                fullWidth
                value={saveText0}
                onChange={(e) => setSaveText0(e.target.value)}
              />
              <p>{saveText0}</p>
             
              <div>
                <IconButton
                  aria-label="add to favorites"
                  style={{ backgroundColor: "#ff9800", margin: "1rem" }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  aria-label="share"
                  style={{ backgroundColor: "#ff9800" }}
                >
                  <ShareIcon />
                </IconButton>
              </div>
            </Item>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
