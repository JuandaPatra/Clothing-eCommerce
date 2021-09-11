import React from "react";
import { Image, Card, Button } from "react-bootstrap";
import "../style/details.scss";
import Footer from "../component/footer";

class Detail extends React.Component {
    constructor(props){
        super(props)
        this.state={
            item :[
                {nama : "black Shirt", price : 100000, img:"https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},
                {nama :"blue Shirt", price : 90000, img :"https://images.unsplash.com/photo-1604006852563-e8b846baca6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJsdWUlMjBzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"},
                {nama : "white Shirt", price :80000, img:"https://images.unsplash.com/photo-1570003179394-40b59f9b4a5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},
                {nama : "brown Shirt ", price : 85000, img:"https://images.unsplash.com/photo-1625052804681-366ec6526fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}
            ]
        }
    }

  render() {
      console.log(this.state.item)
    return (
      <div className="detail">
        <div className="newItem">
          <h1>New Arrivals</h1>
          <h3>How soon is now? It's pretty soon. It's like now.They're Here</h3>
          <div className="latest-items">
          <Card border="light" className="new" >
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80" className="gambar" />
            <Card.Body>
              <Card.Title>White sweatshirt</Card.Title>
              <Card.Text>Rp.{(150000).toLocaleString()}</Card.Text>
              <div className="size">
              <Button variant="light" onClick={()=>alert("S")}>S</Button>
              <Button variant="light">M</Button>
              <Button variant="light">L</Button>
              <Button variant="light">XL</Button>
              </div>
              <div className="addtoCart">
                  <p>+ Add to cart</p>
              </div>
            </Card.Body>
          </Card>
          </div>
          <div className="itemitem">
              <div className="itemProd">
            {this.state.item.map((item)=>{
                return  <Card border="light" className="item" >
                <Card.Img variant="top" src={item.img} className="gambaritem" />
                <Card.Body>
                  <Card.Title>{item.nama}</Card.Title>
                  <Card.Text>Rp.{(item.price).toLocaleString()}</Card.Text>
                  <div className="sizeitem">
                  <Button variant="light" onClick={()=>alert("S")}>S</Button>
                  <Button variant="light">M</Button>
                  <Button variant="light">L</Button>
                  <Button variant="light">XL</Button>
                  </div>
                  <div className="addtoCart">
                      <p>+ Add to cart</p>
                  </div>
                </Card.Body>
              </Card>
            })}

              </div>
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Detail;
