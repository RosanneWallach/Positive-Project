import logo from './logo.svg';
import './App.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div >

<AppBar position="static">
  <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" >
      Welcome
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Welcome to our streaming service! We provide you the latest movies and tv shows at the comfort of your home!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >genres</Typography>
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
          <Typography >MORE COMING SOON!</Typography>
        </AccordionSummary>
      </Accordion>

      
<form  noValidate>
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


    </div>

  

    
  );
}




/*const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
*/




export default App;
