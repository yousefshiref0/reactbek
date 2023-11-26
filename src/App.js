import React, { useEffect, useState } from 'react';
import './App.css';
import'./App copy.css';


const App=()=> {
  const [bom,setbom]=useState([]);
  console.log(bom);
  useEffect(()=>{reactbek();},[])
  const reactbek=async()=>{
    const response=await fetch("https://fakestoreapi.com/products");
    const jsonData=await response.json();
    setbom(jsonData)
  }
  
  return (
    <>
    <header className="menu__wrapper">
        <div className="menu__bar">
            <nav>
                <ul className="navigation hide">
                    <li>
                        
                        
                        <a href="#Top-rated" title="Top rated">
                            Top rated
                        </a>
                    </li>
                    <li>
                        
                        
                        <a href="#category" title="category">
                        category
                        </a>
                    </li>
                    <li>
                        <a href="#cart" title="cart">
                            cart
                        </a>
                    </li>
                    <li>
                        <a href="#about" title="about">
                            about
                        </a>
                    </li>
                    
                    
                </ul>
            </nav>
        </div>
        
    </header>

    <h2>myshop-reactbek</h2>
    <div className='container'>
      {bom.map((values)=>{
        return(
          <>
           <div className="card">
    <div className="poster">
        <img src={values.image}/>
    </div>
    <div className="details">
    <h5>{values.title}</h5>
        
        <div className="rating">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <span>4/5</span>
        </div>
        <div className="tags">
            <span>{values.category}</span>
            
        </div>
        <div className="info">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, </p>
        </div>
    </div>
    
</div>
          </>
        )
      })}
   
     
    </div>
    </>
  );
}

export default App;
