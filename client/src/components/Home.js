import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


    

function Home(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Recipes And Stories
          </Typography>
                    <Typography variant="h6" className={classes.title}>
                        "People who like to eat ... are always the best."
          </Typography>
                    <div>
                        {localStorage.getItem("token") !== null ? (
                            <Button onClick={() => { localStorage.removeItem("token"); props.history.push("/signin"); }} variant="contained" color="primary">Logout</Button>
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
                </Toolbar>
            </AppBar>

           </div>
    );
}
export default withRouter(Home);
