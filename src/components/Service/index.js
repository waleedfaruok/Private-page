import React,{useEffect,useState} from 'react';
import './style.css';
import axios from 'axios';
 function Service() {
     const [itemes , setitemes] = useState([]);
    useEffect(() =>{
        axios.get("js/getdata.json").then((res) =>{
            setitemes(res.data.servecis);
        })
    },[])
  return(
   <section className='Servicesw' id='Services'>
    <div className='container'>
      <h2 className='h1-seo'>Services</h2>
      <section className='ser-rwo'>
        {itemes.map((ite) =>
            <div className="greden" key={ite.id}>
             <i className={ite.icon}></i>
            <p className='til'>{ite.title}</p>
            <p className='pro-my'>{ite.addtitle}</p>
      </div>
        )}
      </section>
    </div>
   </section>
  );
}
export default Service;