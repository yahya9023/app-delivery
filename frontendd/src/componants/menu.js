import React from 'react';
import {Link} from"react-router-dom"; 
import jwtdecode from "jwt-decode";

function menu() {
    const isAuthenticated =  () =>{

        const jwt =  localStorage.getItem('token');
      
        if(jwt){
          
          const JWT1 =jwtdecode(jwt);
    
    
          
          return   JWT1;
         
    
        }
         return false;
      }
      const signout =  () =>{
        const jwt =  localStorage.removeItem('token');
       
        window.location="/";
        return jwt;
      
      
      }
  return (
    <>

	
	<nav class="navbar navbar-expand-lg navbar-light bg-warning shadow">
    {!isAuthenticated() && (
        <>
        <Link  to={'/signin'} class="navbar-brand " >
       <span>food</span>
      
        </Link>
        </>
        )}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse  " id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto topnav ">
              
              {!isAuthenticated() && (
             
            <>
           
                <li class="nav-item m-2">
                    <Link class="nav-link btn btn-primary text-white" type="button" to={'/signin'} data-toggle="modal" data-target="#myModal">Sign In</Link>                  
                </li>
                <li class="nav-item m-2">
                    <Link class="nav-link btn btn-danger text-white" type="button"to={'/signup '} data-toggle="modal" data-target="#myModal">Sign Up</Link>
                </li>
                </>
                 )}
            </ul>
            
            
          
                    
                       {isAuthenticated()   && (
              <ul  className='bienvenue'>
                <li>
                <span className="nav-link" style={{cursor:'pointer'}}   > Bienvenue { isAuthenticated().username }</span>
                </li>
              
 {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Tableau de bord</Link>
        </li>  */}
          <li className="nav-item">

            <span className="nav-link" style={{cursor:'pointer'}}  onClick={signout} > Logout</span>

          </li>
       
        




          </ul>
  )}
          </div>
          
          
     
        

           
   
            

    </nav>

    </>
  )
}

export default menu