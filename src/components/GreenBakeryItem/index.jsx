import React,{useEffect} from "react";
import styles from './greenbakeryitem.module.css';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";

export default function GreenBakeryItem({ greenbakery}) {
   
   return (
       
      <div>         
         <div className={styles.item}>
            <div className={styles.img}>
               <Link to={`/products/${greenbakery.sort}/id/${greenbakery.id}`}>
                  <img
                     style={{ width: '100%'}}
                     src={greenbakery.image}
                     alt={greenbakery.name} />
                  <div className={styles.overlay}>
                     <div className={styles.text}>{greenbakery.category}</div>
                  </div> 
               </Link> 
            </div>
            <h2 className={styles.name}>
               {greenbakery.name}
            </h2>
            <div
               className={styles.textGray}>
               NT${greenbakery.price}
            </div>
           
         </div>
      </div>
      
   );
}