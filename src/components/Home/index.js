import React from 'react';
import './style.css';
function Home() {
  return(
  <section className='home'>
      <div className='container'>
      <div className='rwo-sictio'>
      <div className='title'>
       <h3>Welcome to my own site</h3>
       <h2>front end developer</h2>
       <a href='#projects' className='btn'>projects</a>
       <div className='iconses'>
        <a href='/'><i className=" fab fa-github"></i></a>
        <a href='/'><i className=" fab fa-linkedin-in"></i></a>
        <a href='/'><i className=" fab fa-facebook"></i></a>
       <a href='/'><i className=" fab fa-instagram"></i></a>
       </div>

    </div>
    <div className='imge'>
     <img src='image/pade.png'/>
    </div>
      </div>
    </div>
  </section>
  );
}
export default Home;