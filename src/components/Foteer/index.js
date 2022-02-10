import React from "react";
import './style.css';

function Foteer(){
    return(
        <footer>
        <h3 className="name">walid</h3>
        <div className='icons'>
        <a href='#'><i className=" fab fa-github"></i></a>
        <a href='#'><i className=" fab fa-linkedin-in"></i></a>
        <a href='#'><i className=" fab fa-facebook"></i></a>
       <a href='#'><i className=" fab fa-instagram"></i></a>
       </div>
       <div className="linkses">
           <a href="#">I am a <span>wk..</span>website designer and developer</a>
       </div>
        </footer>
    );
}
export default Foteer;