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
          <img style={{width:'200px',height:'200px'}}
            src="https://images.pexels.com/photos/1366872/pexels-photo-1366872.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <h3 style={{color:'black'}}>Furniture</h3>
        </div>
      </Link>
      <Link to={`/pro/${1}`}>
 
        <div className="seconddiv">
          <img style={{width:'200px',height:'200px'}}
            src="https://img.freepik.com/free-photo/clothing-rack-with-hawaiian-shirts-with-floral-print-hangers-hat_23-2149366082.jpg?w=360&t=st=1686327154~exp=1686327754~hmac=a4d2e089340f853cf6b14948d56c0e9cdb1249439cbac28d135aa4cf496156c2"
            alt=""
          />
          <h3 style={{color:'black'}}>Clothes</h3>
        </div>
      </Link>
      <Link to={`/pro/${4}`}>

        <div className="seconddiv">
          <img style={{width:'200px',height:'200px'}} 
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
          <h3 style={{color:'black'}}>Shoes</h3>
        </div>
      </Link>
      <Link to={`/pro/${2}`}>

        <div className="seconddiv">
          <img style={{width:'200px',height:'200px'}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh77oT43_C1ntVc3jqxaPJukWxuZKR55csLQ&usqp=CAU"
            alt=""
          />
          <h3 style={{color:'black'}}>Electronics</h3>
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
        <img style={{width:'200px',height:'200px'}} src={imgSrc} alt="" />
      </Link>
      <p>{name}</p>
      <h1>₹{price}</h1>

      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to cart
      </button>
    
  </div>
);
export default Home;
