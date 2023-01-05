//imports
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


//hooks
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from 'next/router';

//Styled components UI library 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#000" : "#ccc",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "justify",
  color: theme.palette.text.secondary,
}));

//Main function
export default function RowAndColumnSpacing() {
 

  //UseState hook  
  const [formValue, setFormValue] = useState(() => {
    return {
      title: "",
      text: "",
    };
  });

  //permettre de mettre à jour  le formValue
  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };

  //fonction qui se déclenche quand je clique sur le bouton
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValue);

//Objet formdata(tableau) 
    const formData = new FormData();


    Object.entries(formValue).forEach(([key, value]) => {
      //Ajoute clé ou clé et valeur
      formData.append(key, value);
    });

//conversion format Json
    const response = await fetch("/api/workData", {
      method: "UPDATE",
      body: formData,
    });

    console.log(await response.json());
  };
 
  //SaveTitlepour sauvagarder tous les fonctions */

  //title
  const [saveTitle0, setSaveTitle0] = useState("");
  const [saveTitle1, setSaveTitle1] = useState("");
  const [saveTitle2, setSaveTitle2] = useState("");
  const [saveTitle3, setSaveTitle3] = useState("");
  const [saveTitle4, setSaveTitle4] = useState("");
  const [saveTitle5, setSaveTitle5] = useState("");
  //text
  const [saveText0, setSaveText0] = useState("");
  const [saveText1, setSaveText1] = useState("");
  const [saveText2, setSaveText2] = useState("");
  const [saveText3, setSaveText3] = useState("");
  const [saveText4, setSaveText4] = useState("");
  const [saveText5, setSaveText5] = useState("");


  //await -> asyncranous function
  const handleUser = async () => {
    
// la méthode get 
    const data = await fetch("/api/workData", {
      method: "GET",
    });

// Converstion
    const decoded = await data.json();
    console.log(decoded); // ce que je récupére

//sélection des data
    setSaveTitle0(decoded[0].title);
    setSaveTitle1(decoded[1].title);
    setSaveTitle2(decoded[2].title);
    setSaveTitle3(decoded[3].title);
    setSaveTitle4(decoded[4].title);
    setSaveTitle5(decoded[5].title);

    setSaveText0(decoded[0].text);
    setSaveText1(decoded[1].text);
    setSaveText2(decoded[2].text);
    setSaveText3(decoded[3].text);
    setSaveText4(decoded[4].text);
    setSaveText5(decoded[5].text);

  };
  
  //useEffect hook
  useEffect(() => {
    handleUser();
  }, []);

//verifier si l'utilisateur est un admin
   const router = useRouter()
   const [isAdmin, setIsAdmin] = useState(() => {
     return false;
   });

  
  const userId = "639dd629ca2b121f57c65960"; 
  const token = router.asPath.split("/")[2];
   console.log("token : " + token);
  useEffect(() => {
     if (router.query.id === userId) {  
     setIsAdmin(true);
           
    }
    console.log(router.query);
   
    
  });
 

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
              alt="sebstien"
            />

            <Item>
              {isAdmin === true ? (
               <>
                <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveTitle1}
                onChange={(e) => setSaveTitle1(e.target.value)}
                />
              
                <TextField className="text-white"
                    id="text"
                    label="Text"
                    variant="outlined"
                    fullWidth
                    value={saveText1}
                    onChange={(e) => setSaveText1(e.target.value)}
                    placeholder="MultiLine with rows: 4 and rowsMax: 6"
                    multiline
                    rows={4}
                    maxRows={6}
                  />
                </>    
               
   ):( <><h1 style={{ fontSize: "20px", color: "#00C5C8" }}> 
                {saveTitle1}
              </h1>
           
              <p>{saveText1}</p></>)}              
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
              {isAdmin === true ? (
                 <>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveTitle2}
                onChange={(e) => setSaveTitle2(e.target.value)}
              />
              <TextField className="text-white"
                    id="text"
                    label="Text"
                    variant="outlined"
                    fullWidth
                    value={saveText2}
                    onChange={(e) => setSaveText2(e.target.value)}
                    placeholder="MultiLine with rows: 4 and rowsMax: 6"
                    multiline
                    rows={4}
                    maxRows={6}
                  />
                   </>
                  ):( <><h1 style={{ fontSize: "20px", color: "#ffeb3b" }}>
                {saveTitle2}
              </h1>
              <p>{saveText2}</p></>)} 
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
              {isAdmin === true ? (
                 <>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveTitle3}
                onChange={(e) => setSaveTitle2(e.target.value)}
              />
              <TextField className="text-white"
                    id="text"
                    label="Text"
                    variant="outlined"
                    fullWidth
                    value={saveText3}
                    onChange={(e) => setSaveText3(e.target.value)}
                    placeholder="MultiLine with rows: 4 and rowsMax: 6"
                    multiline
                    rows={4}
                    maxRows={6}
                  />
                   </>
                  ):( <><h1 style={{ fontSize: "20px", color: "#ffeb3b" }}>
                {saveTitle3}
              </h1>
              <p>{saveText3}</p></>)} 
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
              {isAdmin === true ? (
                 <>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveTitle4}
                onChange={(e) => setSaveTitle4(e.target.value)}
              />
              <TextField className="text-white"
                    id="text"
                    label="Text"
                    variant="outlined"
                    fullWidth
                    value={saveText4}
                    onChange={(e) => setSaveText4(e.target.value)}
                    placeholder="MultiLine with rows: 4 and rowsMax: 6"
                    multiline
                    rows={4}
                    maxRows={6}
                  />
                   </>
                  ):( <><h1 style={{ fontSize: "20px", color: "#ffeb3b" }}>
                {saveTitle4}
              </h1>
              <p>{saveText4}</p></>)} 
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
               {isAdmin === true ? (
                 <>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveTitle5}
                onChange={(e) => setSaveTitle5(e.target.value)}
              />
              <TextField className="text-white"
                    id="text"
                    label="Text"
                    variant="outlined"
                    fullWidth
                    value={saveText5}
                    onChange={(e) => setSaveText5(e.target.value)}
                    placeholder="MultiLine with rows: 4 and rowsMax: 6"
                    multiline
                    rows={4}
                    maxRows={6}
                  />
                   </>
                  ):( <><h1 style={{ fontSize: "20px", color: "#ffeb3b" }}>
                {saveTitle5}
              </h1>
              <p>{saveText5}</p></>)} 
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
              {isAdmin === true ? (
                 <>
              <TextField className="text-white"
                id="title"
                label="Title"
                placeholder="title"
                variant="outlined"
                fullWidth
                value={saveTitle0}
                onChange={(e) => setSaveTitle0(e.target.value)}
              />
              <TextField className="text-white"
                id="text"
                label="Text"
                variant="outlined"
                fullWidth
                value={saveText2}
                onChange={(e) => setSaveText0(e.target.value)}
                placeholder="MultiLine with rows: 4 and rowsMax: 6"
                multiline
                rows={4}
                maxRows={6}
                  />
                   </>
                  ):( <><h1 style={{ fontSize: "20px", color: "#ffeb3b" }}>
                {saveTitle0}
              </h1>
              <p>{saveText0}</p></>)} 
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

