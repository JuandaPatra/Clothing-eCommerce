import React, { useState } from 'react'
import {Container, Image} from "react-bootstrap"

const Quality = () => {
    const [data, setData]= useState([
        {
            title : "Kualitas Terbaik",
            caption : "Polos memastikan kamu mendapatkan produk dengan kualitas terbaik",
            icon : "https://kasual.id/front/assets/images/icons/kualitas.png"
        },
        {
            title : "Gratis Custom Ukuran Polos.id",
            caption : " juga menerima pembuatan celana pilihanmu secara custom!",
            icon : "https://kasual.id/front/assets/images/icons/gratis-custom.png"
        },
        {
            title : "Made to Order",
            caption : "Polos memproduksi celana custom selama 4 – 7 hari untuk hasil yang terbaik",
            icon : "https://kasual.id/front/assets/images/icons/mto.png"
        },
        {
            title : "Return & Exchange",
            caption : "Polos memastikan kamu mendapatkan produk dengan kualitas terbaik",
            icon : "https://kasual.id/front/assets/images/icons/return.png"
        },
        
    ])
    return (
        <>
        <Container>
            <div className="d-flex mt-5 mb-2 flex-wrap" >
                {data.map(item =>{
                    return(
                        <div className="d-flex me-2 ms-2 ">
                            <Image src={item.icon} rounded  style={{width:"10vw"}}/>
                            <div className="ms-3" style={{width:"30vw"}}>
                                <h1 style={{fontWeight:"bolder"}}>{item.title}</h1>
                                <p>{item.caption}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </Container>
            
        </>
    )
}

export default Quality
