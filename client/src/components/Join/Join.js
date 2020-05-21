import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Join.css';
import ToDo from '../posts';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random/?food,healthy,breakfast)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


 function Join(props) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
    <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <div style={{display:"flex", justifyContent:"spacebetween"}}>
                    <Typography variant="h6" className={classes.title}>
                        Recipes And Stories
          </Typography>
                    <Typography variant="h6" className={classes.title} style={{marginLeft:"250px"}}>
                        "People who like to eat ... are always the best."
          </Typography>
                    <div>
                        {localStorage.getItem("token") !== null ? (
                            <Button onClick={() => { localStorage.removeItem("token"); props.history.push("/signin"); }} variant="contained" color="primary" style={{marginLeft:"250px"}}>Logout</Button>
                        ) : (
                                <div>
                                    <Link to="/signin">
                                    <Button variant="contained" color="primary">
                                    Sign_In</Button>
                                    </Link>
                                    <Link to="/signup">
                                    <Button variant="contained" color="primary">
                                    Sign_Up</Button>
                                    </Link>
                                </div>
                            )}
                    </div>
                    </div>
                </Toolbar>
            </AppBar>

           </div>
    <div  className="joinOuterContainer" >
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
    <ToDo/>
    </div>
  );
}
export default Join;