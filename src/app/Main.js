"use client"
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import styles from "./main.module.css";

export default function Main() {
  const [listProduct, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setProduct(data);
        }
        getProduct();
      }, []);

      const orderAz = ()=> {
        const listaAuxiliar = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));
        setProduct(listaAuxiliar);
      }

      const orderZa = ()=> {
        let listaAuxiliar = [...listProduct].reverse((a, b) => a.title.localeCompare(b.title));
        setProduct(listaAuxiliar);
      }

      const orderCres = ()=> {
        let listaAuxiliar = [...listProduct].sort((a, b) => (b.price - a.price) );
        setProduct(listaAuxiliar);
      }

      const orderDrec = ()=> {
        let listaAuxiliar = [...listProduct].reverse((a, b) => (b.price - a.price));
        setProduct(listaAuxiliar);
      }

      if(listProduct[0] == null){
        return <Spinner/>
      }

      return (
        <>
        <div className={styles.filters}>
          <button onClick={ orderAz }>Az</button>
          <button onClick={ orderZa }>Za</button>
          <button onClick={ orderCres }>crescente</button>
          <button onClick={ orderDrec }>decrescente</button>
        </div>
   <main className={styles.main}> 
        {/* <div class="row" className={styles.row}>
        <div class="column" className={styles.column}> */}
        {listProduct.map((produto) => (
        <div class="card" className={styles.card} key={produto. id}>
          <br/>
        
        <img src={produto. image} className={styles.image} alt={produto.title} />

        <h3 className={styles.paragrafo}>{produto.title}</h3>
        <p className={styles.paragrafo}>{produto.description}</p>
        <p className={styles.paragrafo}>Category: {produto.category.name}</p>
        <p className={styles.paragrafo}>Price: ${produto.price}</p>
        <p className={styles.paragrafo}>Rating: {produto.rating.count}stars</p>

        {/* <button className={styles.button} class="button">Adicionar</button> */}
        </div>
        
        ))}
       </main>
       </>
           );
    }; 
