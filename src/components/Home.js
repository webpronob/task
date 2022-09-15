import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Home.css'
import cart from '../images/cart-shopping-solid.svg';

const Home = ({itemProduct}) => {
    
    const [product,setProduct] =useState([])
    const [product1,setProduct1] =useState(product)
    useEffect(() => { setProduct1(product)}, [product || seclect1 ||seclect2 ||inputSeclect] )
    const [seclect1,setSeclect1] =useState('')
    const [seclect2,setSeclect2] =useState('')
    const [inputSeclect,setInputSeclect] =useState('')
    const [quantity,setQuantity] =useState('')
    
    useEffect(() =>{
        fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>setProduct(data.products.slice(0,6)));
    },[])
    
    console.log(product1,product)
        
    const Main =(productss) =>{
        
       useEffect((event) =>{
        if(seclect1){
            
            setProduct1(productss.filter(i =>i.brand.includes(seclect1)))
            

        }
         if(seclect2){
            console.log(seclect1)
            // setSeclect1("")
            setProduct1(productss.filter(i =>i.category.includes(seclect2)))
            console.log(product1)
        }
         if(inputSeclect){
            
            setProduct1(productss.filter(i =>i.title.includes(inputSeclect)))
            

        }
        // if(!seclect1 ||!seclect2 || !inputSeclect){
        //     p =product
        // }
       },[seclect1 ||seclect2 ||inputSeclect])
      
    }
    Main(product)
    



    return (
        <div className='container'>
            {/* navbar */}
            <div className='navbar'>
                {/* dropdown */}
                <div className='dropdown'>
<div class="select">
  <select onChange={event =>{setSeclect1(event.target.value)}} name='seclectBrand' id="standard-select">
    {
        product.map(i =>{
            return <option value={i.brand}>{i.brand}</option>
        })
    }
  </select>
  <span class="focus"></span>
</div>

<div class="select">
  <select onChange={event =>{setSeclect2(event.target.value)}} id="standard-select">
  {
        product.map(i =>{
            return <option value={i.category}>{i.category}</option>
        })
    }
  </select>
  <span class="focus"></span>
</div>
<a onClick={() =>setProduct1(product)} className='reset-button' href='#'>Reset</a>
                </div>
                {/* searchbar */}
                <div className='searchbar-section'>
                <form>
                    <label>Search  </label>
  <input className='search-bar' onChange={event =>{setInputSeclect(event.target.value)}} type="search" placeholder="Search..."/>
</form>

{/* <button class="button button2"></button> */}
<Link class="button button2" to="/cart">Add To Cart</Link>
                </div>
            </div>
            {/* mainpart */}

            <div>
                




            <div id="wrapper">
  <h1>Sortable Table of Search Queries</h1>
  
  <table id="keywords" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th><span>Image</span></th>
        <th><span>Name</span></th>
        <th><span>Category</span></th>
        <th><span>Stock</span></th>
        <th><span>Price</span></th>
        <th><span>Brand</span></th>
        <th><span>Buy</span></th>
      </tr>
    </thead>
    <tbody>
      
      {


    //     seclect1 || seclect2 ?
    //     product.filter(items =>items.seclect1?items.brand:seclect2.category){
            
    //     }
    //   :"k"

    product1.map(items =>{
        return <>
                <tr>
                <td><img src={items.thumbnail} alt="product image" width="100" height="100"/></td>
                <td>{items.title}</td>
                <td>{items.category}</td>
                <td className='stock-name'>{items.stock>5?"In Stock":"Out Of Stock"}</td>
                <td>{items.price}</td>
                <td>{items.brand}</td>
                <td>
                <div className='buy-section'>
                <input id="case-number-field" onChange={event =>{setQuantity(event.target.value)}} type="number" min="0" class="form-control text-center" placeholder='1'/>
               <button className='btn-shop'><i class="fa-solid fa-cart-shopping icon"></i></button>
               <input onClick={() =>itemProduct(items,quantity)} type="checkbox"/>
                </div>
                </td>
                
                </tr>
                </>
    })




      }
      
    </tbody>
  </table>
 </div> 




{/* 
 return <>
                <tr>
                <td><img src={items.thumbnail} alt="product image" width="100" height="100"/></td>
                <td>{items.title}</td>
                <td>{items.category}</td>
                <td className='stock-name'>{items.stock>5?"In Stock":"Out Of Stock"}</td>
                <td>{items.price}</td>
                <td>{items.brand}</td>
                <td>
                <input id="case-number-field" type="number" min="0" class="form-control text-center" value="1"/>
                </td>
                </tr>
                </>

 */}








                
            </div>

        </div>
    );
};

export default Home;