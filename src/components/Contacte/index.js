import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './style.css';
function Contacte(){
    const [contact,setcontact] = useState([]);
    useEffect(() =>{
     axios.get('js/getdata.json').then((res) =>
         setcontact(res.data.contact)
     )
    },[]);
    return(
        <section className='contact' id='contact me'>
         <div className='container'>
         <h2 className='h1-seo'>Contact Me</h2>
         <section className='contact-row'>
          {contact.map((cont) =>
          <div className='carde-cont' key={cont.id}>
          <i className={cont.icon}></i>
          <p className='tyle'>{cont.phone}</p>
          <p className='num'>{cont.number}</p>
          </div>
          )}
         </section>
         </div>
        </section>
    );
}

export default Contacte;