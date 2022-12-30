import React from 'react'
import data from './Data';
function Home({cart,setCart}) {

  function trigger(item){
  
    //Add item in cart
    let find =cart.filter((el)=>{
      return el.id==item.id
    });
    let a=find.length;
    (a<1)?setCart([...cart,item]):find[0].quantity=find[0].quantity+1;

  }


  const {productItem} = data;
  return (
    <div>
      <div className='home'>
      <div className="banner">
        <div className="content">
          <h1>E-Solutions</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque obcaecati suscipit esse cum molestiae, consequatur ratione!
            Consequatur dignissimos quisquam molestiae consequuntur eveniet
            minus atque error, doloribus distinctio officia nesciunt voluptatum!
          </p>
          <button className='buynow'>Shop Now</button>
        </div>
      </div>

      <div className='products'>
        {
          productItem.map((card1) => (
            <div className='maincard'>
             <img className='cardimage' src={card1.image}/>
              <h2 className='cardname'>{card1.name}</h2>
              <h3 className='cardprice'>{card1.price}</h3>
              <button className='addcart' onClick={()=>trigger((card1))}>Add to Cart</button>
            </div>
          
          ))
        }
      </div>

    </div>
    <footer class="footer">
            <p class="footer_tittle">E-Solutions</p>

            <div class="footer_socials">
                <a href="#" class="footer-icon" ><i class='bx bxl-facebook'></i></a>
                <a href="#" class="footer-icon" ><i class='bx bxl-instagram-alt'></i></a>
                <a href="#" class="footer-icon" ><i class='bx bxl-twitter'></i></a>
                <a href="#" class="footer-icon" ><i class='bx bxl-github'></i></a>   
            </div>
            
            <p> &#169; 2022 copyright all right reserved</p>
        </footer>
    </div>
    
    
  )
}


export default Home