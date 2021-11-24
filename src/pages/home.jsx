import React from "react";
import { Container } from "react-bootstrap";
import "../style/home.scss";

//import Component
import Slider from "../component/Home/slider";
import Quality from "../component/Home/Quality";
import Service from "../component/Home/Service";
import Info from "../component/Home/Box-info";
import Popular from "../component/Home/Popular";
import NewProduct from "../component/Home/New_Product";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Slider/>
        <Container>
          <Quality/>
          <NewProduct/>
          <Service />
          <Popular/>
          <Info/>
        
        </Container>
      </div>
    );
  }
}

export default Home;
