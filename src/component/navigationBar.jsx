import React from "react";
import { NavDropdown, Navbar, Container, Nav, Button, Modal, FormControl, Badge } from "react-bootstrap";
import logo from "../asset/Polos.png"
import "../style/navigation.scss"

class NavigationBar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            login : false
        }
    }

    onLogin=()=>{
      let data ={
        email : this.refs.email.value,
        password : this.refs.password.value
      }
      console.log(data)
    }
  render() {
    return (
      <div className="navibar">
        <Navbar fixed="top" bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} width="100px" height="100px" className="d-inline-block align-top" alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i> <Badge bg="danger">9</Badge></Nav.Link>
                <Nav.Link href="#home" className="login">Login</Nav.Link>
                <NavDropdown title="Category" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Shirt</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Hat</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Jacket</NavDropdown.Item>
                  
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Button variant="primary" className="loginButton" onClick={()=>this.setState({login:true})}>Login/Register</Button>
          </Container>
        </Navbar>

        <Modal show={this.state.login} onHide={()=>this.setState({login : false})}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Email </label>
            <FormControl
      placeholder="email"
      ref="email"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />

<label>Password </label>
            <FormControl
      placeholder="password"
      ref="password"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
     <Button variant="primary" style={{marginLeft:"12vw", marginTop:"30px"}} onClick={()=>this.setState({login:false})}>
            Continue with Google
          </Button>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.onLogin}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}
export default NavigationBar;
