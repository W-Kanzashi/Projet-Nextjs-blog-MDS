// import * as React from "react"; 
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


//API FETCH
import { useState, useEffect } from "react";
// import { decode } from "punycode";
import TextField from "@mui/material/TextField";
import { useRouter } from 'next/router';


//*!end update form const*/
//Styled components are a good choice for building a UI library since everything
// can be in one file and easily be exported and reused
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#000" : "#ccc",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "justify",
  color: theme.palette.text.secondary,
}));

//export default is used to export a single class, function or primitive from a script file.
//export le componenet 
export default function RowAndColumnSpacing() {
  
  //*!form to update the work history*/
  //useState est un Hook qui permet d’ajouter l’état local React à des fonctions composants
  //setFormValues nous permetre de modifier la valeur du variable
  //useState c'est pour sauvgardé l'état d'un component
  //formValue retourn l'état  
  const [formValue, setFormValue] = useState(() => {
    return {
      title: "",
      text: "",
    };
  });
  //permet de mettre à jour formValue
  const handleUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormValue({ ...formValue, [event.target.id]: event.target.value });
  };

  //fonction s'excution when I click on the validate button
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValue);

//creé un objet formdata qui contiendra un tableau
    const formData = new FormData();
//loop in formvalue
    //key title,key text, value what is going to display
    Object.entries(formValue).forEach(([key, value]) => {
      //La méthode append() de l'interface FormData ajoute une nouvelle valeur à une clé existante dans un
      // objet FormData, ou rajoute cette clé et cette valeur quand elle n'existe pas.
      formData.append(key, value);
    });
//
    const response = await fetch("/api/workData", {
      method: "UPDATE",
      body: formData,
    });

    console.log(await response.json());
  };
  //*!end/

  //*!select the data/
  //**pour sauvagarder tous les titres et les textes */
  //*map as an alternative*/
  //*getter est pour récupérer 
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

  // la méthode qui fait le get
  //await -> asyncranous function
  const handleUser = async () => {
    
// la méthode get 
    const data = await fetch("/api/workData", {
      method: "GET",
    });

    // Convert the string into json format
    const decoded = await data.json();
    console.log(decoded); // ce que je récupére

    // title Save the data in a useState function
    // useState
  //*!select the data/
    setSaveTitle0(decoded[0].title);
    setSaveTitle1(decoded[1].title);
    setSaveTitle2(decoded[2].title);
    setSaveTitle3(decoded[3].title);
    setSaveTitle4(decoded[4].title);
    setSaveTitle5(decoded[5].title);
    // title Save the data a useState function
    setSaveText0(decoded[0].text);
    setSaveText1(decoded[1].text);
    setSaveText2(decoded[2].text);
    setSaveText3(decoded[3].text);
    setSaveText4(decoded[4].text);
    setSaveText5(decoded[5].text);

  };
  //Le hook useEffect est un hook qui va permettre de déclencher une fonction
  // de manière asynchrone lorsque l'état du composant change
  //lancer la fonctionn handeluser le moment ou je charge la page
//appel à notre API se fait au niveau du hook useEffect
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
  
  const userId = "639dd629ca2b121f57c65960"; // got it from the database, table user
  // if the id user in the url corresponds to the user id , then then the user is an admin
  // split is a method used to split the url or routerpathname
  const token = router.asPath.split("/")[2];
   console.log("token : " + token);
  useEffect(() => {
     if (router.query.id === userId) { //if the id of the user corresponds to the id in the url , then the user is an admin
     setIsAdmin(true);
           
    }
    console.log(router.query);
    // query.id will send an object which contains the path of my file(dossier pages)
    //it's an object returned by next, excuted before displaying my page
    
  });
  // const postId = "63947260c7f11bfea52b7d89";
  // const data = await fetch("/api/workData", {
  //     method: "DELETE",
  //   });

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
                placeholder="text"
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
                placeholder="text"
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
                placeholder="text"
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
                placeholder="text"
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
                placeholder="text"
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
                placeholder="text"
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

