import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productList } from "./xyz";
import "../index.css";
import img from '../Asset/img.png'
const Home = () => {
  const [updateobj,setUpdateobj]=useState(productList);
  const [count,setcount]=useState(0);
  const [Searchh,setsearchh] = useState("");
 console.log(updateobj)
  const dispatch = useDispatch();
  useEffect(() => {
    setUpdateobj(updateobj);
   console.log(updateobj)
   console.log(count)
  if(Searchh.length==0){
    setUpdateobj(updateobj);
  }
  }, [updateobj ,count,Searchh]);

  const AddToCartHandler = (options) => {
    console.log(options);
    dispatch({ type: "addToCart", payload: options });
    dispatch({
      type: "calculateTotal",
    });
    toast.success("Added to cart");
  };
  
 
 function setSortArr(state){
  console.log("heool")
  let newobj = productList;
  if(state=="DEC"){
    newobj.sort((a,b)=>(a.price<b.price)?1:-1);
  }
  else if(state=="INC"){
    newobj.sort((a,b)=>(a.price>b.price)?1:-1);
  }
  setUpdateobj(newobj);
 console.log(updateobj)
  setcount(count+1);
}
const ChangeVal=(e)=>{
  // e.preventDefault();
    let val = e.target.value;
    setsearchh(val);
    if ( val) {
      const resultarray =  productList.filter(vall => vall.category.name.includes(val) 
      );
      setUpdateobj(resultarray);
      setcount(count+1)
      }else{
        setUpdateobj(updateobj);
        setcount(count+1)
      }
 
}


  return (
    <div>
    <div>
      <img style={{width:'100%',height:'100vh'}} src={img} alt="" />
    </div>
      <div className="Startingdiv">
      <Link to={`/pro/${3}`}> 

        <div className="seconddiv" id="home">
          <img style={{width:'200px',height:'200p'}}
            src="https://api.lorem.space/image/furniture?w=640&h=480&r=4041"
            alt=""
          />
          <h3>Furniture</h3>
        </div>
      </Link>
      <Link to={`/pro/${1}`}>
 
        <div className="seconddiv">
          <img style={{width:'200px',height:'200p'}}
            src="https://api.lorem.space/image/fashion?w=640&h=480&r=591"
            alt=""
          />
          <h3>Clothes</h3>
        </div>
      </Link>
      <Link to={`/pro/${4}`}>

        <div className="seconddiv">
          <img style={{width:'200px',height:'200p'}} 
            src="https://api.lorem.space/image/shoes?w=640&h=480&r=8513"
            alt=""
          />
          <h3>Shoes</h3>
        </div>
      </Link>
      <Link to={`/pro/${2}`}>

        <div className="seconddiv">
          <img style={{width:'200px',height:'200p'}}
            src="https://api.lorem.space/image/watch?w=640&h=480&r=8587"
            alt=""
          />
          <h3>Electronics</h3>
        </div>
      </Link>
      <Link to={`/pro/${5}`}>
        
        <div className="seconddiv">
          <img style={{width:'200px',height:'200p'}} src="https://api.lorem.space/image?w=640&h=480&r=9727" alt="" />
          <h3>Others</h3>
        </div>
      </Link>
      </div>
      <div style={{display:'grid' }}>
      <div style={{marginTop: '2rem',marginBottom:'2rem',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
}}>
        <h1>Filter:</h1>
        <input style={{margin: '0.5rem',
    fontSize: 'inherit',
    borderRadius: '5px',
    padding: '2px',
}} onChange={ChangeVal} type="text" value={Searchh} placeholder="Search..." />
        <p>Sort By Price : 
        <button style={{margin: '0.5rem',
    fontSize: 'inherit',
    borderRadius: '5px',
    padding: '2px',
}} onClick={()=>setSortArr("DEC")}>High To Low</button>
        <button style={{margin: '0.5rem',
    fontSize: 'inherit',
    borderRadius: '5px',
    padding: '2px',
}} onClick={()=>setSortArr("INC")}>Low To High</button>
        </p>
      </div>
      <div className="Startingdiv" style={{overflowY:'auto',height:'100vh'}}>

      {updateobj.map((i) => (
        <ProductCard
          name={i.category.name}
          price={i.price}
          imgSrc={i.images[0]}
          id={i.id}
          key={i.id}
          handler={AddToCartHandler}
        />
      ))}
      </div>
    </div>
    </div>
  );
};
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  
    <div>
      <Link to={`/product/${id}`}>
        <img style={{width:'200px'}} src={imgSrc} alt="" />
      </Link>
      <p>{name}</p>
      <h1>₹{price}</h1>

      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to cart
      </button>
    
  </div>
);
export default Home;
