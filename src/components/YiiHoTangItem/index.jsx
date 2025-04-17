import React,{useEffect} from "react";
import styles from './yiihotangitem.module.css';
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";

export default function YiiHoTangItem({ yiihotang}) {
   
   return (
       
      <div>         
         <div className={styles.item}>
            <div className={styles.img}>
               <Link to={`/products/${yiihotang.sort}/id/${yiihotang.id}`}>
                  <img
                     style={{ width: '100%'}}
                     src={yiihotang.image}
                     alt={yiihotang.name} />
                  <div className={styles.overlay}>
                     <div className={styles.text}>{yiihotang.category}</div>
                  </div> 
               </Link> 
            </div>
            <h2 className={styles.name}>
               {yiihotang.name}
            </h2>
            <div
               className={styles.textGray}>
               NT${yiihotang.price}
            </div>
           
         </div>
      </div>
      
   );
}