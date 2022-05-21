import React ,{ useEffect } from 'react'

import {Link} from"react-router-dom";

import axios from "axios";  

function Landingpage() {
  
  useEffect(()=>{
     const url="http://localhost:5000/api/hotel"
     
        axios.get(url).then((res) => {
        
          console.log(res);
      
          })},[])
  return (
    <div className='container-fluid'>
         <div className="container  landing">
        
        <div className="contentt ">
          <h1>delicious  <br /><span className="style"> Food</span></h1>
          <div className="text">
         
            <Link class="button_order" type="button" to={'/Home'} data-toggle="modal" data-target="#myModal"> 
            Order Now
            </Link>                  
                
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Landingpage