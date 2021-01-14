import logo from './logo.svg';
import './App.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Popover from '@material-ui/core/Popover';
let anchorEl;
let open = false;
const handleClick = (event) => {
  anchorEl = event.currentTarget
  open = true;
  console.log("testing");
};

function App() {
  return (
  
    <div>
    <Avatar alt="Remy Sharp" src="https://www.regmovies.com/magnoliaPublic/dam/jcr:7372c5b5-e8bf-4169-ab11-1a91291e7d97/The-Suicide-Squad-Empire-Magazine-Cover.jpg" onClick={handleClick}/>
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
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={5} readOnly />
      </Box>


    <Avatar alt="Travis Howard" src="https://m.media-amazon.com/images/M/MV5BZGE2MmQ0ZTEtM2FjOC00OTE1LTlmYjMtYjlkMzllN2RlOTBiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" onClick={handleClick}/>
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
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={4} readOnly />
      </Box>


    <Avatar alt="Cindy Baker" src="https://www.filmstories.co.uk/wp-content/uploads/2020/02/spiral-poster.jpg" onClick={handleClick}/>
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
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={3} readOnly />
      </Box>
  
  </div>
  );
}

export default App;
