import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";
import kollie from '../../img/kollie.jpeg'
import {Link} from "react-router-dom";
export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
     const getCats = async ()=>
     {
       const res = await axios.get("/categories")
       setCats(res.data)
     };
     getCats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
       <span className="sidebarTitle">ABOUT ME</span>
    <img className="profile"
    src={kollie}
     alt="" 
     />
     <p className="text">
      I am Emmanuel Kolawole a freelance full-stack developer(front-end focused). 
    I have worked for several clients and different industries.
     I have delivered solutions for startups and mini companies. I create fast,
     clean and maintainable web applications, ready to scale from few users to thousands. 
      I can help you deliver a seamless and engaging experience to your users. 
      Background in software Engineering and ability as a full stack developer allow me to create everything from small business websites
      to custom web applications.<br/> I have 3 years experience in delivering web applications and i like making life better through technology. 
      My work currently consist of freelance clients and side projects. My freelance full stack development roots are in React, 
       Node js and others. <br/> I offer my services as a full stack developer for hire to work with business of all sizes .<br/>
      Feel free to get in touch!!
        
    </p>
     </div>
     {/*<div className="sidebarItem">
     <span className="sidebarTitle">CATEGORIES</span>
    <ul className="sidebarList">
      {cats.map(c=> (
        <Link to={`/?cat=${c.name}`}>
          <li className="sidebarListItem">{c.name}</li>
        </Link>
      ))}
     
         
    </ul>
      </div>*/}
         
     <div className="sidebarItem">
     <span className="sidebarTitle">FOLLOW US</span>  
     <div className="sidebarSocial">
     <i className="sidebarIcon fa-brands fa-facebook-square"></i>
       <i className="sidebarIcon fa-brands fa-twitter-square"></i>
       <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
       <i className="sidebarIcon fa-brands fa-instagram-square"></i>
     </div>
     </div>
     </div>
  );
}
