import React,{Fragment, useEffect, useState, useSyncExternalStore} from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

export default function Home() 
{
    const [products, setproducts]=useState([]);
    const [searchParams,setSearchParams] =useSearchParams()
    useEffect(()=>{
       fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
      .then(res=>res.json())
      .then(res=>setproducts(res.products))
    },[searchParams])
    
    return<Fragment>
    <h1 id="products_heading">Latest Products</h1>
    <section id="products" className="container mt-5">
      <div className="row">
        {products.map(product=><ProductCard product={product}/>)}
        
      </div>
    </section>
    </Fragment>
}