import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './style.css';

 function Project() {
     const [proje , setproje] = useState([]);

     useEffect(()=>{
       axios.get('js/getdata.json').then((res) =>
          setproje(res.data.project)
       )
     },[]);
  return (
   <section className='projict' id='projects'>
       <div className='container'>
       <h2 className='h1-seo'>projects</h2>
       <section className='projict-row'>
       {proje.map(items =>
        <div className='cared-pro' key={items.id}>
        <div className='imgges'>
            <img src={items.img}/>
        </div>
        <div className='articl'>
         <p  className='titil-proj'>{items.title}</p>
         <div className='link'>
          <a href={items.links}>{items.artecil}</a>
          <i className={items.icon}></i>
         </div>
        </div>
       </div> 
       )}
       </section>
       </div>
   </section>
  );
}
export default Project;