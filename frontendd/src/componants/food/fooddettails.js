import React, { useEffect } from 'react'
// import {useAlert} from 'react-alert'
import {useDispatch,useSelector} from 'react-redux'
import {getOneFood,clearErrors} from '../../actions/foodsAction'
import { useParams } from 'react-router-dom';
import { addToCart } from "../../actions/CartAction";


function Fooddettails({match}) {

  const dispatch = useDispatch();

  const handleAddToCart = ()=>{
    const jwt =  localStorage.getItem('token');
    
    if(!jwt){
      alert(' Hello !!! \n Welcome to MARHBA food \n TO CONTINUE YOUR SHOP PLEASE CONNECT ' 
     
      )

    }else{
      dispatch(addToCart(food))
    }
    
    
  }

    const { id } = useParams();
    const {error,food} = useSelector(state =>state.foodDetails)
    console.log("🚀 ~ file: fooddettails.js ~ line 11 ~ byid ~ food", food)
 

    useEffect(()=>{
        

         dispatch(getOneFood(id))
         if(error){
             alert.error(error);
             dispatch(clearErrors())
         }
            },[dispatch,id])
  return (
    <div className='details_card'>
          <div className=" container-fluid">
        <div className="flex_details">
          <div className="col-12 col-lg-5 img-fluid" id="product_image">
          <img id='stars-hotel' className='img-fluid'  style={{"height" : "580px", "width" : "900px"}} src={"http://localhost:3000/"+food.image_cover} alt="BigCo Inc. logo"/>
          </div>
          <div className='card-body'>
          <div className="col-12 col-lg-5 mt-5">
      <h1>{food.name}</h1>
            
            <div className="rating-outer">
              <div className="rating-inner" />

            </div>
   Price :    {food.price}    DH       
            
            <p id="product_price">
             
            </p>

            <button type="button" onClick={handleAddToCart} id="cart_btn" className="addcard_btn">Add to Cart</button>
            
            <h4 className="mt-2">Description:</h4>
          {food.description}
    
           
          
          
         
          </div>
          </div>
        </div>
      </div>
      </div>

 
  )
}

export default Fooddettails