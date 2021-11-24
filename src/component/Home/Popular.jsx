import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import "../../styles/home/popular.scss"

const Popular = () => {
  const [data, setData] = useState([
    {
      img: "https://kasual.id/uploads/categories/1623135166.jpg",
      title: "WorkActive",
    },
    {
      img: "https://kasual.id/uploads/categories/1635838978.jpg",
      title: "Bundle Jamal",
    },
    {
      img: "https://kasual.id/uploads/categories/1623136170.jpg",
      title: "Jamal Koko Shirt",
    },
    {
      img: "https://kasual.id/uploads/categories/1635839108.jpg",
      title: "Ankle Chino",
    },
  ]);
  return (
    <>
      <Container>
        <div className="d-flex  justify-content-between">
          <h3>Category Popular</h3>
          <a href="/" style={{textDecoration:"none"}}>Lihat Semua</a>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
        {data.map((item) => {
          return (
              
            <Card className="card-pop">
              <Card.Img src={item.img} alt="Card image" className="card-pop-img" />
              <Card.ImgOverlay>
                <div className="d-flex flex-column justify-content-between">
                  <div style={{ textAlign: "center" }}>
                    <Card.Title>{item.title}</Card.Title>
                  </div>
                  <div style={{ marginTop: "48vh", textAlign: "center" }}>
                    <Button variant="primary" style={{ backgroundColor: "navy", borderRadius:"50px", width:"50%" }}>
                      Shop Now
                    </Button>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          );
        })}
        </div>
      </Container>
    </>
  );
};

export default Popular;
