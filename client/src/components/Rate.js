import React, { Component } from "react";
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import BeautyStars from 'beauty-stars';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

class Rate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      objet: [],
      value: 0,
    };

  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  clickhandle = () => {
    this.setState({
      objet: [...this.state.objet, { name: this.state.input, bool: true }],
      input: "",
    });
  }

  deletehandler = (index) => {
    this.setState({
      objet: this.state.objet.filter((element, i) => index !== i && element),
    });
  }

  render() {
    return (
      <div>  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" ><img src={logo} alt="Logo" width="60px" height="50px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <h2 style={{ color: 'white' }}>Recipes And Stories</h2>
            <Nav.Link>    </Nav.Link>
            <Link to="/Free">
              <Nav.Link href="#features">Our recipes</Nav.Link>
            </Link>
            <NavDropdown title="About us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">contact us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>       </Nav.Link>
            <Nav.Link>  "People who like to eat ... are always the best."</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><div>
              {/* {localStorage.getItem("token") !== null ? (
        <Button onClick={() => {localStorage.removeItem("token"); props.history.push("/login");}} variant="danger">Logout</Button>
        ) : ( */}
              <div>
                <Link to="/login">
                  <Button variant="outline-success">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline-warning">Register</Button>
                </Link>
              </div>
            </div></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <div className="feed" style={{ margin: '30px 30%', border: '1px solid rgba(0,0,0,.125)', padding: '50px', width: '500px', height: '600px' }
        }>

          <span className="main-header">

            <h1>FEEDBACK!</h1>

            <h5>We are working on improuvement to our user experience and we would like your feedback along the way! </h5>
            <BeautyStars value={this.state.value} onChange={value => this.setState({ value })} />
            <input
              type="text"
              value={this.state.input}
              placeholder="Enter a text "
              className="input-text"
              onChange={this.handleChange}
              style={{ widh: '10em', height: '5em', margin: "20px" }} />
            <Button variant="success" onClick={this.clickhandle} style={{ margin: "10px" }}>
              Add
          </Button>
          </span>
          <span>
            <h4>Add your feedback</h4>

          </span>
          <span>
            {this.state.objet.map((e, i) => (
              <div key={i}>

                <label style={{ textDecoration: !e.bool && "line-through" }}>
                  {e.name}
                </label>
                <Button variant="danger" onClick={() => this.deletehandler(i)} style={{ margin: "10px" }}>
                  delete
              </Button>
              </div>
            ))}
          </span>
        </div>
      </div>
    );
  }
}

export default Rate;