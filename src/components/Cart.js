import React, { useState } from 'react';
import '../components/Home.css'
const Cart = ({card}) => {
    // const [q,setQ] =useState(card.quantity)
// const handlePlusQuantity =(){

// } 
let toy;
const total =(to) =>{
    const initialValue = 0;
     toy = to.reduce((accumulator,current) => accumulator + current.price * current.quantity, initialValue)
    
}

total(card)
console.log(toy)
const [q,setQ] =useState(parseFloat(card.quantity))
const handlePlusQuantity =(quan) =>{
    quan.quantity =parseFloat(quan.quantity)+1
    setQ(quan.quantity)
    console.log(quan.quantity)

}
const handleMinusQuantity =(quan) =>{
    quan.quantity =parseFloat(quan.quantity)-1
    setQ(quan.quantity)
}
console.log(q)
    return (
        <div className='row px-5 pt-5 grid1'>
            <div className='col-md-8'>
               
            <div id="wrapper">
  
  <table id="keywords" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th><span>Image</span></th>
        <th><span>Name</span></th>
        <th><span>Price</span></th>
        <th><span>Quantity</span></th>
        <th><span>Subtotal</span></th>
      </tr>
    </thead>
    <tbody>
      
      {


    //     seclect1 || seclect2 ?
    //     product.filter(items =>items.seclect1?items.brand:seclect2.category){
            
    //     }
    //   :"k"

    card.map(items =>{
        return <>
                <tr>
                <td><img src={items.thumbnail} alt="product image" width="100" height="100"/></td>
                <td>{items.title}</td>
                <td>{items.price}</td>
                <td>
                <div class="input-group number-spinner">
                           <button onClick={() =>handleMinusQuantity(items)} id="btn-case-minus" class="btn btn-default"><i class="fas fa-minus"></i></button>
                           <input id="case-number-field" type="number" min="0" class="form-control text-center"  value={parseFloat(q)?parseFloat(q):items.quantity} />
                           <button onClick={() =>handlePlusQuantity(items)} id="btn-case-plus" class="btn btn-default"><i class="fas fa-plus"></i></button>

                        </div>
                </td>
                <td>{items.price}.00</td>
                <td>
                </td>
                
                </tr>
                </>
    })




      }
      
    </tbody>
  </table>
 </div> 
            </div>
            <div className='col-md-4 pt-5'>
            <div class="card" className='cart-container'>
  <div class="card-body">
    <h5 class="card-title pb-4">Cart Total</h5>
   <div className='d-flex justify-content-between'>
    <h6>Subtotal</h6>
    <p>&euro; {toy}.00</p>
   </div>
   <hr></hr>
   <div className='d-flex justify-content-between'>
   <h6>Total</h6>
    <p>&euro; {toy}.00</p>
   </div>
   <button type="button " class="btn check-out btn-primary btn-rounded">PROCEED TO CHECKOUT</button>
  </div>

</div>
            </div>
        </div>
    );
};

export default Cart;