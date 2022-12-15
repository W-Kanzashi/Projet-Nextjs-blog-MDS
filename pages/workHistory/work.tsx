
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
//API FETCH
import { useState, useEffect } from "react";
import { decode } from 'punycode';
import { fontSize } from '@mui/system';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#000' : '#ccc',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: theme.palette.text.secondary,
}));


export default function RowAndColumnSpacing() {
  //API
  //title
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
 
const handleUser = async () => { // API Handler
    // check the jwt token to see if the user is the owner of the page
    // Store the response of the api in data

 const newJoke = {
  categories: "dev",
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
}
    const data = await fetch("/api/workData", {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJoke),
       
    });
 

    // Convert the string into json
  const decoded = await data.json();
  console.log(decoded);

    // title Save the data in a useState function
  setSaveJoke0(decoded.content[0].title);
  setSaveJoke1(decoded.content[1].title);
  setSaveJoke2(decoded.content[2].title);
  setSaveJoke3(decoded.content[3].title);
  setSaveJoke4(decoded.content[4].title);
  setSaveJoke5(decoded.content[5].title);
     // title Save the data in a useState function
  setSaveText0(decoded.content[0].text);
  setSaveText1(decoded.content[1].text);
  setSaveText2(decoded.content[2].text);
  setSaveText3(decoded.content[3].text);
  setSaveText4(decoded.content[4].text);
  setSaveText5(decoded.content[5].text);
  



  };
  useEffect(() => {
    handleUser();
  }, [])


  //console.log(saveJoke);
    return (
          
        <Box sx={{ width: '100%', }}>
            <div  style={{ padding: 30 }}><h1 style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:"3rem"
      }}>Welcome to your work board</h1></div>
            
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
                        
                <h1 style={{ fontSize:'20px', color:'#00C5C8' }}>{saveJoke1}</h1>
                <p>{saveText1}</p>
                         <div><IconButton aria-label="add to favorites" style={{backgroundColor:'#00C5C8'}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share"  style={{backgroundColor:'#00C5C8', margin:'1rem'}}>
          <ShareIcon />
        </IconButton> </div>
                
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
                        
                <h1 style={{ fontSize:'20px', color:'#ffeb3b' }}>{saveJoke2}</h1>
                <p>{saveText2}</p>
                        <div> <IconButton aria-label="add to favorites" style={{backgroundColor:'#ffeb3b'}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{backgroundColor:'#ffeb3b',margin:'1rem'}}>
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
                        
                <h1 style={{ fontSize: '20px', color: '#fa0089' }}>{saveJoke3}</h1>
                <p>{saveText3}</p>
                        <div><IconButton aria-label="add to favorites" style={{backgroundColor:'#fa0089'}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{backgroundColor:'#fa0089',margin:'1rem'}} >
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
        alt="Paella dish"
                        />
                       
       <Item>
                        
                <h1 style = {{fontSize:'20px', color:'#009688'}}>{saveJoke4}</h1>
                       <p>{saveText4}</p>
                        <div><IconButton aria-label="add to favorites" style={{backgroundColor:'#009688',margin:'1rem'}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{backgroundColor:'#009688'}}>
          <ShareIcon />
        </IconButton></div> 
                
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
                        
                <h1 style = {{fontSize:'20px', color:'#3f51b5'}}>{saveJoke5}</h1>
                        <p>{saveText5}</p>
                         <div><IconButton aria-label="add to favorites" style={{backgroundColor:'#3f51b5',margin:'1rem'}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{backgroundColor:'#3f51b5'}}>
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
                <h1 style = {{fontSize:'20px', color:'#ff9800'}}>{saveJoke0}</h1>
                       <p>{saveText0}</p>
                         <div><IconButton aria-label="add to favorites" style={{backgroundColor:'#ff9800', margin:'1rem'}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{backgroundColor:'#ff9800'}}>
          <ShareIcon />
        </IconButton></div>
                
                    </Item>
                
                    </Item>
        </Grid>
      </Grid>
    </Box>
  );
}


