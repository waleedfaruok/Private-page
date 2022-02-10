import React, { Component } from 'react';
import './style.css';

class Nave extends Component {
 render(){
   const addnghit = () =>{
       const nghit = document.querySelector('.nghit');
       const light = document.querySelector(".light");
       const list2 = document.querySelector('.list2');
       const extr = document.querySelector(".extr");
        document.body.style.backgroundColor ="black";
        nghit.style.display ="none";
        if(light.style.display !== "block"){
            light.style.display = "block";
        }if(list2.style.backgroundColor !=="white"){
            list2.style.backgroundColor = "white";
        }if(extr.style.color !=="black"){
             extr.style.color ="black";
        };
   };
    const addnghitd = () =>{
    const nghit = document.querySelector('.nghit');
    const light = document.querySelector(".light");
    const list2 = document.querySelector('.list2');
    const extr = document.querySelector(".extr");
     document.body.style.backgroundColor ="white";
     light.style.display ="none";
     if(nghit.style.display !== "block"){
        nghit.style.display = "block";
     }if(list2.style.backgroundColor !=="black"){
        list2.style.backgroundColor = "black";
    }if(extr.style.color !=="white"){
         extr.style.color = "white";
    };
};
  const addtogall = () =>{
    const list2 = document.querySelector('.list2');
      list2.classList.add('add');   
  };
  const dleted= ()=>{
    const list2 = document.querySelector('.list2');
    list2.classList.remove("add");
  };
return (
    <div className="header">
        <div className='container'>
        <span onClick={addtogall} className='iconse'>
         <span></span>
         <span></span>
         <span></span>
        </span>
        <i onClick={addnghit} className="nghit fas fa-sun "></i>
       <i onClick={addnghitd} className="light far fa-moon"></i> 
    <div className='nave-bar'>
    <h1 className='title'>walid</h1>
    <ul className='list'>
        <li><a href='#home'>home</a></li>
        <li><a href='#Services'>Services</a></li>
        <li><a href='#projects'>projects</a></li>  
        <li><a href='#contact me'>contact me</a></li>         
        </ul>
    </div>
        </div>
    <ul className='list2'>
    <li><a href='#home'>home</a></li>
        <li><a href='#Services'>Services</a></li>
        <li><a href='#projects'>projects</a></li> 
        <li><a href='#contact me'>contact me</a></li>  
        <i onClick={dleted} className="extr fas fa-times"></i>
    </ul> 
</div>
    );
    }
}
export default Nave;
