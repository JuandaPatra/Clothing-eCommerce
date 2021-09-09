import React from "react"
import NavigationBar from "./component/navigationBar"
import Home from "./pages/home"
import Detail from "./pages/details"


class App extends React.Component{
  render(){
    return(
      <div>
        <NavigationBar/>
        {/* <Home/> */}
        <Detail/>
      </div>
    )
  }
}

export default App