
import React from 'react'
import image from '../assets/pie.jpg';
import image2 from '../assets/samosa.jpg';
import image3 from '../assets/pattie.jpg';
import image4 from '../assets/burger.jpg';
import './slide.css'

function Slide() {
  return (
    <div class="w3-container w3-margin"> 
      <img src={image} alt="logo1" style={{height: "480px" , display:"flex" , marginTop:"10px",width:"100%"}} />

    
    

      
 
<br></br>
  <table class="w3-table">
<tr>
  <th> <img src={image}  alt="Norway" style={{width:"415px"}}/></th>
  <th> <img src={image2}  alt="Norway" style={{width:"400px"}}/></th>
  <th><img src={image3}  alt="Norway" style={{width:"350px"}}/></th>
</tr>
<tr>
<td style={{textAlign:"center"}}><span style={{color:"white"}}>Mutter Paneer</span><br></br><a style={{color:"white"}} href="#" class="w3-bar-item w3-button">Grab Your Order</a></td>
  <td style={{textAlign:"center"}}><span style={{color:"white"}}>Mutter Paneer</span><br></br><a style={{color:"white"}} href="#" class="w3-bar-item w3-button">Grab Your Order</a></td>
  <td style={{textAlign:"center"}}><span style={{color:"white"}}>Mutter Paneer</span><br></br><a style={{color:"white"}} href="#" class="w3-bar-item w3-button">Grab Your Order</a></td>
</tr>
<br></br>
<tr>
  <th> <img src={image}  alt="Norway" style={{width:"415px"}}/></th>
  <th> <img src={image2}  alt="Norway" style={{width:"400px"}}/></th>
  <th><img src={image3}  alt="Norway" style={{width:"350px"}}/></th>
</tr>
<tr>
<td style={{textAlign:"center"}}><span style={{color:"white"}}>Mutter Paneer</span><br></br><a style={{color:"white"}} href="#" class="w3-bar-item w3-button">Grab Your Order</a></td>
  <td style={{textAlign:"center"}}><span style={{color:"white"}}>Mutter Paneer</span><br></br><a style={{color:"white"}} href="#" class="w3-bar-item w3-button">Grab Your Order</a></td>
  <td style={{textAlign:"center"}}><span style={{color:"white"}}>Mutter Paneer</span><br></br><a style={{color:"white"}} href="#" class="w3-bar-item w3-button">Grab Your Order</a></td>
</tr>
</table>
<br></br>
 
<div class="row">
  <div class="column">
    <div class="card">
      <p><i class="fa fa-user"></i></p>
      <h3>11+</h3>
      <p>Restaurent</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <p><i class="fa fa-check"></i></p>
      <h3>55+</h3>
      <p>city</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <p><i class="fa fa-smile-o"></i></p>
      <h3>100+</h3>
      <p>Happy Clients</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <p><i class="fa fa-coffee"></i></p>
      <h3>100+</h3>
      <p>Meetings</p>
    </div>
  </div>
</div>
</div>




  )
}

export default Slide;





  
