import React from "react"

//import Component
import NavigationBar from "./component/navigationBar"
import Footer from "./component/footer"


//import Pages
import Home from "./pages/home"
import Detail from "./pages/details"
import RegisterPage from "./pages/register"


class App extends React.Component{
  render(){
    return(
      <div>
        <NavigationBar/>
        {/* <Home/> */}
        <RegisterPage/>
        {/* <Detail/> */}
        <Footer/>
      </div>
    )
  }
}

export default App