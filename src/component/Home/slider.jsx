import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  const data = useState([
    {
      imag: "https://kasual.id/banner/ankle-air-prestige-desktop.webp",
    },
    {
      imag: "https://images.unsplash.com/photo-1520683111718-ef0a20c6a470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    },
    {
      imag: "https://images.unsplash.com/photo-1517784648376-0bdfdc01a1aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=843&q=80",
    },
  ]);
  console.log(data);
  return (
    <>
      <Carousel>
        {data[0].map((item) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" style={{ height: "90vh" }} src={item.imag} alt="First slide" />
              {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Slider;
