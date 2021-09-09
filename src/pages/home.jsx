import React from "react"
import {Image} from "react-bootstrap"
import "../style/home.scss"

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="top">
                <h1>Minimalist Men Shop</h1>
                
                <Image src="https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhbmslMjB0c2hpcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" rounded  className="headline"/>
                </div>
                <div className="up-body-product">
                    <div className="up-shirt">
                        <h1 style={{textAlign:"center"}}>Shirt</h1>
                    <Image src="https://images.unsplash.com/photo-1622445270936-5dcb604970e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxhbmslMjB0c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" rounded  className="shirt-prod"/>
                    
                    </div>
                    <div className="up-hat">
                        <h1 style={{textAlign:"center"}}>Hat</h1>
                    <Image src="https://images.unsplash.com/photo-1622445275576-721325763afe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" rounded  className="hat-prod"/>
                    </div>

                </div>
                <div className="jacket">
                    <h1 style={{textAlign:"center"}}>Jacket</h1>
                <Image src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbGlzdCUyMGJsYWNrJTIwamFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" rounded  className="jacket-prod"/>
                </div>

                <div className="product-andalan">
                    <h1 style={{textAlign:"center"}}>Product</h1>
                </div>

            </div>
        )
    }
}

export default Home