import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productList } from './xyz'
 import toast from 'react-hot-toast';
 import Pro from './Pro';
 import '../index.css'
const Product = () => {
    const params = useParams()
    console.log(params.id)

    const dispatch = useDispatch();
    const AddToCartHandler=(options)=>{console.log(options)
        dispatch({type:"addToCart",payload:options})
        dispatch({
            type:"calculateTotal",
            
        })
        toast.success("Added to cart")
    
}
  return (
    <div>
     
      {productList.map((i)=>(
          i.id==params.id ? (
            <ProdCrt name={i.category.name} title={i.title} description={i.description} price={i.price} id={i.id} imgSrc={i.images[0]} key={i.id} handler={AddToCartHandler}/>
           ) : ""
      ))}
      <div>
        <h3 style={{margin:'5rem'}}>Similar Items........</h3>
        {productList.map((i)=>(
          i.id==params.id ? (
            <div style={{    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem',}}>

            <ProdCrtr name={i.category.name} title={i.title}  price={i.price} id={i.id} imgSrc={i.images[1]} key={10}  />
            <ProdCrtr name={i.category.name} title={i.title}  price={i.price} id={i.id} imgSrc={i.images[2]} key={11}  />
            <ProdCrtr name={i.category.name} title={i.title}  price={i.price} id={i.id} imgSrc={i.images[0]} key={12}  />
            </div>
           ) : ""
      ))}
      </div>
    
    </div>
  )
}
const ProdCrt=({name,price,imgSrc,id,handler,title,description})=>(
  <div className='productlist'>
     <img src={imgSrc} alt="" />
       <div  >

        <h1>{name}</h1>
        <h3>{title}</h3>
        <p> <strong>Price : </strong>   ₹{price}</p>
        <p>{description}</p>
        <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to cart</button>
       </div>
  </div>
)
const ProdCrtr=({name,price,imgSrc,id,title})=>(
  <div  >
     <img src={imgSrc} style={{width:'200px'}} alt="" />
       <div  >

        <h1>{name}</h1>
        <h3>{title}</h3>
        <p> <strong>Price : </strong>   ₹{price}</p>
         
         
       </div>
  </div>
)
export default Product