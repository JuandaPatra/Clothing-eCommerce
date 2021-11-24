import React, { useState } from "react";
import { Container ,Image} from "react-bootstrap";

const Service = () => {
  const [data, setData] = useState([
    {
      logo: "https://kasual.id/front/assets/images/icons/chat.png",
      title: "Chat dengan Kami",
      caption: "Customer service kami selalu siap melayani pertanyaan kamu 24/7",
      link: "Tanya Kami",
    },
    {
      logo: "https://kasual.id/front/assets/images/icons/custom.png",
      title: "Gratis Custom Ukuran",
      caption: "Bebas tentukan ukuran kamu sendiri seacara online. Tambahan biaya? 0 rupiah!",
      link: "Custom sekarang",
    },
    {
      logo: "https://kasual.id/front/assets/images/icons/fitting.png",
      title: "Virtual Fitting",
      caption: "Kamu dapat bertanya seputar cara pengukuran celana favorit kamu, gratis!",
      link: "Booking Jadwal",
    },
  ]);
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center" style={{backgroundColor:"#f4f4f4", borderRadius:"10px",height:"50vh"}}>
          {data.map((item) => {
            return (
              <div className="mt-4 mb-4" style={{textAlign:"center", width:"30vw",height:"35vh"}}>
                <Image src={item.logo} rounded style={{ width: "5vw" }} />
                <h1 style={{marginBottom:"6vh", fontWeight:"bolder"}}>{item.title}</h1>
                <p>{item.caption}</p>
                <a href="/" style={{textDecoration:"none"}}>{item.link}</a>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Service;
