import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import '../index.css'
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const Cart = () => {
    const { cartItems ,subtotal ,shipping ,tax ,total } = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const increment=(id)=>{
        dispatch({
            type:"addToCart",
            payload:{ id },
        })
        dispatch({
            type:"calculateTotal",
            
        })
    }
    const decrement=(id)=>{ dispatch({
        type:"decrement",
        payload:id,
    })
    dispatch({
        type:"calculateTotal",
        
    })}
    const deletehandler=(id)=>{
        dispatch({
            type:"deleteFromCart",
            payload:id,
        })
        dispatch({
            type:"calculateTotal",
            
        })
    }
  return (
    <div className='cartfirst'>
    <main>
       {cartItems.length > 0?(
        cartItems.map((i)=>(
            <CartItem 
            imgSrc={i.imgSrc} name={i.name} price={i.price} qty={i.quantity} id={i.id} key={i.id} increment={increment} decrement={decrement} deletehandler={deletehandler} dee = {i.quantity*i.price}
        />
        ))
       ):(<h1>Cart is Empty</h1>)
       }
    </main>
    <aside>
        <h2>Subtotal: ₹{subtotal}</h2>
        <h2>Shipping: ₹{shipping}</h2>
        <h2>Tax     : ₹{tax}</h2>
        <h2>Total   : ₹{total}</h2>
    </aside>
    </div>
  )
}
const CartItem=({imgSrc,name,price,qty,increment,decrement,deletehandler,id,dee})=>(
   <div className="cartItem">
    <img src={imgSrc} alt="Item" />
    <article>
        <h1>{name}</h1>
        <p>₹{price}</p>
       
          
    </article>
    <div>
        <button   onClick={()=>decrement(id)}><AiFillMinusCircle transform='scale(2)'/></button>
        <p>{qty}</p>
        <button onClick={()=>increment(id)}><AiFillPlusCircle transform='scale(2)'/></button>
    </div>
    <div>
        <button onClick={()=>deletehandler(id)}><AiFillDelete transform='scale(2)'/></button>
    </div>
    <div>
        <h4>Total : ₹{dee}</h4>
    </div>
   </div>
)
export default Cart