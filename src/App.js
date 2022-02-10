import { Component } from "react";
import Nave from "./components/Nave";
import Home from "./components/Home";
import Service from "./components/Service";
import Project from "./components/Project";
import Contacte from "./components/Contacte";
import Foteer from "./components/Foteer";
class App extends Component{
  render(){
    return(
     <div className="App">
       <Nave/>
       <Home/>
       <Service/>
       <Project/>
       <Contacte/>
       <Foteer/>
     </div>
    );
  }
}
export default App;