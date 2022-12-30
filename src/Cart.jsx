import React, { useEffect, useState } from 'react'
export default function Cart({cart,setCart}) {
  function update(item){
    const index = cart.indexOf(item);
    cart[index].quantity +=1;
    setCart([...cart]);
  }
  function minus(item){
    const index = cart.indexOf(item);
    let v = cart[index];
    (v.quantity<1)?v.quantity=0: v.quantity -=1;
    setCart([...cart]);
  }
  function remove(id){
    const rem = cart.filter((items)=>items.id!==id);
    setCart([...rem]);
  }

  const[price,setPrice]= useState();
  useEffect(()=>{
    let rate = 0;
    cart.map((item)=> 
    {(rate+=item.quantity*item.price)});
    setPrice(rate);
  })
 

  return (
    <div className='maincart'>
        <div className='orders'>
            <h1 className='tittle'>Items in cart</h1>
            <div className='ordered-items'>
               {
               cart.map((item)=>(
                <div className='cart-items'>
                 <div> <img src={item.image} alt='loading'></img></div>
                 <div>
                  <h1>{item.name}</h1>
                  <h2>{item.price}</h2>
                  <div className='incre-decre'>
                    <div className='incre-btn'>
                    <button onClick={()=>minus(item)}>-</button>
                    <h3>{item.quantity}</h3>
                    <button onClick={()=>update(item)}>+</button>
                    </div>
                    <button className='remove' onClick={()=>remove(item.id)} >Remove</button>
                    </div>
                    </div>
                  </div>
                  
               ))
               }
            </div>
            <div className='total-price'>
              <h2>Total price :{price} </h2>  
            </div>
        </div>
        <div className="checkout">
          <h1>Proceed to checkout</h1>
        </div>

    </div>
  )
}
