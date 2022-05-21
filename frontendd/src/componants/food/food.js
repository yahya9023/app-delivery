import React from "react";
import {Link } from 'react-router-dom'
import { addToCart } from "../../actions/CartAction";
import {useDispatch, useSelector,} from 'react-redux'



const Food = ({food})=>{
  const jwt =  localStorage.getItem('token');
  const dispatch = useDispatch();
 
  const handleAddToCart = ()=>{
    if(!jwt){
      alert(' Hello !!! \n Welcome to MARHBA food \n TO CONTINUE YOUR SHOP PLEASE CONNECT ' 
     
      )

    }else{
      dispatch(addToCart(food))
    }
   
  }
    return(
      
        <div class="card p-1">
<img id='stars-hotel'  style={{"height" : "200px"}} src={"http://localhost:3000/"+food.image_cover} alt="BigCo Inc. logo"/>
      
         <div className="card-body">
           <h4 className="card-title">{food.name}</h4>
           <p className="card-text">{food.description}</p>
           <p className="card-text">{food.price} DH</p>
           <div className="flex">
             
           <Link to ={`/food/${food._id}`} className=" details_btn ">voir details</Link>

      <button  onClick={handleAddToCart} className=" addcard_btn">Add To card</button>


           </div>
   
         </div>
       </div>
    )
}
export default Food