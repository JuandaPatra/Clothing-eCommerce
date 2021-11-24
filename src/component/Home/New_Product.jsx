import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Card, Button, Container } from "react-bootstrap";
import "../../styles/home/newProduct.scss";

const New_Product = () => {
  const [data, setData] = useState(0);
  const [product, setProduct] = useState([
    {
      name: "Celana Black Ankle Air Prestige",
      price: 399000,
      star: 3,
      img: "https://kasual.id/uploads/products/1636026706.webp",
      category : "ANKLE PANTS"
    },
    {
      name: "Celana Grey Ankle Air Prestige",
      price: 399000,
      star: 3.5,
      img: "https://kasual.id/uploads/products/1636026958.webp",
      category : "ANKLE PANTS"
    },
    {
      name: "Celana Gurkha 720 - Navy",
      price: 379000,
      star: 4,
      img: "https://kasual.id/uploads/products/1635311271.webp",
      category : "GURKHA PANTS"
    },
    {
      name: "White Chino Short",
      price: 269000,
      star: 4.5,
      img: "https://kasual.id/uploads/products/1623731161.webp",
      category : "CHINO PANTS"
    },
    {
      name: "Basic Oxford Black Shirt",
      price: 299000,
      star: 3,
      img: "https://kasual.id/uploads/products/1622106525.webp",
      category : "OXFORD SHIRT"
    },
    {
      name: "Kasual Flannel - Ruby",
      price: 399000,
      star: 4.8,
      img: "https://kasual.id/uploads/products/1632213645.jpg",
      category : "FLANNEL SHIRT"
    },
  ]);
  
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between">
          <h1 style={{ fontWeight: "bolder" }}>New Product</h1>
          <a href="/" style={{textDecoration:"none"}}>Lihat Semua</a>
        </div>
        <div className="d-flex flex-wrap justify-content-between mt-2 mb-4 overflow-auto ">
          {product.map((item, ind) => {
            return (
              <Card className="newProduct" key={ind}>
                <div className="newProductImg">
                  <Card.Img variant="top" src={item.img} />
                </div>
                <Card.Body>
                  <p>{item.category}</p>
                  <div style={{ borderTop: "1px solid gray", margin: "auto", overflow: "auto", height: "180px" }}>
                    <Card.Title>{item.name}</Card.Title>
                    <p style={{ fontWeight: "bolder" }}>Rp.{item.price}</p>
                    <Rating  ratingValue={item.star} /* Rating Props */ />
                  </div>
                  <Button variant="primary" style={{ backgroundColor: "navy" }} className="pl-0 pr-0 pb-0 pt-0 ">
                    Check Product
                  </Button>
                  <div style={{ position: "absolute", marginTop: "20px" }}></div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default New_Product;
