import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams,Link } from 'react-router-dom'
import { productList } from './xyz'
 import toast from 'react-hot-toast';
 import '../index.css'
const Pro = () => {
    const params = useParams()
    console.log(params.id)

    const dispatch = useDispatch();
    const AddToCartHandler = (options) => {
      console.log(options);
      dispatch({ type: "addToCart", payload: options });
      dispatch({
        type: "calculateTotal",
      });
      toast.success("Added to cart");
    };
  return (
    <div className="Startingdiv">
     
      {productList.map((i)=>(
          i.category.id==params.id ?  <ProductCard
          name={i.category.name}
          price={i.price}
          imgSrc={i.images[0]}
          id={i.id}
          key={i.id}
          handler={AddToCartHandler}
        /> : ""
      ))}
    
    </div>
  )
}
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  
    <div>
      <Link to={`/product/${id}`}>
        <img style={{width:'200px',height:'200px'}} src={imgSrc} alt="" />
      </Link>
      <p>{name}</p>
      <h1>${price}</h1>

      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to cart
      </button>
    
  </div>
)
export default Pro