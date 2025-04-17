import styles from './hotlistR.module.css';
import { Row, Col } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import React,{useEffect} from "react";
import { Link } from 'react-router-dom';

export default function HotListR() {
   useEffect(() => {
      Aos.init({duration: 3000});
   }, []);
   return (
      <div className="container">
         <Col className={styles.col} >
            <div className={styles.Row}>
               <div className={styles.item}>
                  <div className={styles.info}>
                     <h3 className={styles.category}>
                        Diffuser
                     </h3>
                     <h2 className={styles.name}>
                        室內擴香 Diffuser
                     </h2>
                     <p className={styles.description}>
                        When lit, it releases a rich floral scent with medium intensity.
                     </p>
                     <div className={styles.more}>
                        
                     </div>
                  </div>
                  <div data-aos="fade-left" className={styles.img}>
                     <Link to={`products/id/aHl9hert4W9suXK8ZKfh`}>
                        <img
                           className={styles.img_width}
                           src="/images/diffuser1.webp"
                           alt="product2" />
                        <div className={styles.overlay}>
                           <div className={styles.text}>室內擴香 Diffuser</div>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>

   
         </Col>
      </div>

   );
}