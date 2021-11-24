import React from "react";

//import icons
import { BsCartCheckFill, BsCartCheck, BsSearch } from "react-icons/all";

import { NavDropdown, Navbar, Container, Nav, Button, Modal, FormControl, Badge, Form, InputGroup, Col } from "react-bootstrap";
import "../style/navigation.scss";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      cart: false,
      scroll: false,
    };
  }

  setNavbar = () => {
    window.onscroll = () => {
      // if(window.scrollY !==0){
      //   this.setState({scroll : true})
      // }

      return window.scrollY !== 0 ? this.setState({ scroll: true }) : this.setState({ scroll: false });
      
    };
  };

  onLogin = () => {
    let data = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    };
    console.log(data);
  };

  render() {
    // console.log(window.scrollY)
    // console.log(this.state.scroll)
    return (
      <>
        {this.setNavbar()}
        <Navbar bg={this.state.scroll ? "light" : "transparent"} expand="lg" fixed="top">
          <Container>
            <div style={{ display: "flex", justifyContent: "space-around", width: "100vw" }}>
              <Navbar.Brand href="#home" style={{ color: "blue" }}>
                POLOS.iD
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <div className="d-flex w-100 justify-content-center">
                  <Col xs="6">
                    <InputGroup className="mb-3 col-xs-2">
                      <FormControl placeholder="Cari Celana Ankle" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px" }} />
                      <InputGroup.Text id="basic-addon2" style={{ borderTopRightRadius: "50px", borderBottomRightRadius: "50px", width: "3vw", backgroundColor: "navy", color: "white" }}>
                        <BsSearch />
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>

                  <div className="me-2 d-flex justify-content-between">
                    <Button style={{ marginLeft: "1vw", marginRight: "3vw", color:"navy",  }} variant="transparent" onMouseEnter={() => this.setState({ cart: true })} onMouseLeave={() => this.setState({ cart: false })}>
                      {this.state.cart ? <BsCartCheckFill size={30} /> : <BsCartCheck  size={30}/>}
                    </Button>

                    <Button variant="primary" style={{ backgroundColor: "navy", marginLeft: "1vw", marginRight: "30px", borderRadius:"50px", width:"100px", height:"50px" }}>
                      Login
                    </Button>

                    <Button variant="primary" style={{ backgroundColor: "navy", marginRight: "30px", borderRadius:"50px", width:"100px", height:"50px" }}>
                      Register
                    </Button>
                  </div>
                </div>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
        
      </>
    );
  }
}
export default NavigationBar;
