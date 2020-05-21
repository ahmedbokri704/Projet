import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Card, Carousel } from 'react-bootstrap';
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

function NAV(props) {
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
            <div>
                <Carousel style={{}} >
                    <Carousel.Item style={{ width: "100%", height: "100%" }}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2014/04/03/19/43/recipe-312952_960_720.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption style={{ color: "black" }}>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ width: "100%", height: "100%" }}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2020/04/20/14/08/medical-5068385_960_720.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption style={{ color: "black" }}>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ width: "100%", height: "100%" }}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2016/08/08/16/20/ingredients-1578688_960_720.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption style={{ color: "black" }}>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ width: "100%", height: '100%' }}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2016/01/14/17/46/eat-1140371_960_720.jpg "
                            alt="Third slide"
                        />
                        <Carousel.Caption style={{ color: "black" }}>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ width: "100%", height: '100%' }}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2016/07/05/22/55/mojito-1499549_960_720.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption style={{ color: "white" }}>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ width: "100%", height: '100%' }}>
                        <img
                            className="d-block w-100"
                            src="https://cdn.pixabay.com/photo/2016/05/06/12/25/cook-1375797_960_720.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption style={{ color: "black" }}>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Card>
                <Card.Body>
                    <div className="Text" style={{ display: "flex", justifyContent: "center" }}>
                        
                            Recipes And Stories © 2020__
                        
                            __Privacy Policy,<Link to=""> Contact Us</Link>
                            
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
export default withRouter(NAV);
