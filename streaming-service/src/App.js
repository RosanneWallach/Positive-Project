import "./App.css";


import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Popover from '@material-ui/core/Popover';


import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import TextField from "@material-ui/core/TextField";


let anchorEl;
let open = false;
const handleClick = (event) => {
  anchorEl = event.currentTarget
  open = true;
  console.log("testing");
};

const useStyles = makeStyles({
  
  list: {
    width: '100%',
    textAlign:'left'
  },
  fullList: {
    width: "auto",
  },
});

function App() {
  return (
  
  <div>

  {/*Roseanne  ===============================================================================================================================*/}
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{color: "#871F78", fontSize: "30px", paddingLeft: "40px" }}>Century Theater</Typography>
            <Button color="inherit" style = {{paddingLeft: "1090px", fontSize: "20px"}}>Login</Button>
          </Toolbar>
        </AppBar>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          ></AccordionSummary>
          <AccordionDetails>
            <Typography>
              Welcome to our streaming service! We provide you the latest movies
              and tv shows at the comfort of your home!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className = "App-box">Start a Free Trial</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We offer all genres of movies and tv shows at an affordable price!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>MORE COMING SOON!</Typography>
          </AccordionSummary>
        </Accordion>
        
        <form noValidate>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2021-01-12 T 03:30PM"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>

{/*Rosanne ===============================================================================================================================*/}     
      
{/*Bijorn ===============================================================================================================================*/}
    <div><br></br><br></br></div>
        <Card variant="outlined">
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              Random movie of the day:
            </Typography>
            <Typography variant="h5" component="h2">
            Judas and the Black Messiah
            </Typography>
            <Typography color="textSecondary">
            February 12, 2021
            </Typography>
            <Typography variant="body2" component="p">
            Offered a plea deal by the FBI, William O'Neal infiltrates the Illinois chapter of the 
            Black Panther Party to gather intelligence on Chairman Fred Hampton.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        
{/*Bijorn  ===============================================================================================================================*/}

{/*Niseekah  ===============================================================================================================================*/}
    <div className = "App-background">
      <div className = "App-row">
          <div className = "App-column">
          <Avatar alt="Remy Sharp" src="https://www.regmovies.com/magnoliaPublic/dam/jcr:7372c5b5-e8bf-4169-ab11-1a91291e7d97/The-Suicide-Squad-Empire-Magazine-Cover.jpg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography>The content of the Popover.</Typography>
              </Popover>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{color: "white"}} >The Suicide Squad</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
          </div>
          <div className = "App-column">
            <Avatar alt="Travis Howard" src="https://upload.wikimedia.org/wikipedia/en/6/6a/In_The_Heights_teaser_poster.jpg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography>The content of the Popover.</Typography>
              </Popover>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{color: "white"}}>In the Heights</Typography>
                <Rating name="read-only" value={4} readOnly />
              </Box>
          </div>
          <div className = "App-column">
            <Avatar alt="Cindy Baker" src="https://www.filmstories.co.uk/wp-content/uploads/2020/02/spiral-poster.jpg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography>The content of the Popover.</Typography>
              </Popover>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{color: "white"}} >Spiral</Typography>
                <Rating name="read-only" value={3} readOnly />
              </Box>
          </div>
      </div>





      <div className = "App-row">
          <div className = "App-column">
          <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/en/c/c7/Nobody_2021_Film_Poster.jpeg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography>The content of the Popover.</Typography>
              </Popover>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{color: "white"}} >Nobody</Typography>
                <Rating name="read-only" value={3} readOnly />
              </Box>
          </div>
          <div className = "App-column">
            <Avatar alt="Travis Howard" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/F9_poster.jpg/220px-F9_poster.jpg" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography>The content of the Popover.</Typography>
              </Popover>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{color: "white"}}>Fast and Furious 9</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
          </div>
          <div className = "App-column">
            <Avatar alt="Cindy Baker" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwTLG9lhb7OYVU9SW9W465xpeA6aVAhY6ce3OgtfB3S6TwULWb" style={{width:"200px", height:"200px"}} onClick={handleClick}/>
            <Popover
                open={open}
                anchorEl={anchorEl}
                // onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography>The content of the Popover.</Typography>
              </Popover>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" style={{color: "white"}} >The Conjuring 3</Typography>
                <Rating name="read-only" value={4} readOnly />
              </Box>
          </div>
      </div>
    </div> 
{/*Niseekah  ===============================================================================================================================*/}
 
 
  </div>

  );
}



export default App;


 