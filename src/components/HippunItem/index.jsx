import React,{useEffect} from "react";
import styles from './hippunitem.module.css';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";

export default function HippunItem({ hippun}) {
   
   return (
       
      <div>         
         <div className={styles.item}>
            <div className={styles.img}>
               <Link to={`/products/${hippun.sort}/id/${hippun.id}`}>
                  <img
                     style={{ width: '100%'}}
                     src={hippun.image}
                     alt={hippun.name} />
                  <div className={styles.overlay}>
                     <div className={styles.text}>{hippun.category}</div>
                  </div> 
               </Link> 
            </div>
            <h2 className={styles.name}>
               {hippun.name}
            </h2>
            <div
               className={styles.textGray}>
               NT${hippun.price}
            </div>
           
         </div>
      </div>
      
   );
}