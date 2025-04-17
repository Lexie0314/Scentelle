import styles from './hotlist.module.css';
import { Row, Col } from "antd";
import HotListR from "../HotListR";
import Aos from "aos";
import "aos/dist/aos.css";
import React,{useEffect} from "react";
import { Link } from 'react-router-dom';

export default function HotList() {
   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);
   return (
      <div className="container">
         <Col  className={styles.col}>
            <div className={styles.Row}>
               <div className={styles.item}>
                  <div data-aos="fade-right" className={styles.img}>
                  <Link to={`/products/id/4d2ZhLV6SqE3oAompudH`}>
                        <img
                           className={styles.img_width}
                           src="/images/candle1.webp"
                           alt="product1" />
                           
                        <div className={styles.overlay}>
                           <div className={styles.text}>香氛蠟燭 Candle</div>
                        </div>
                  </Link>
                  </div>

                  <div className={styles.info}>
                     <h3 className={styles.category}>
                        Candle
                     </h3>
                     <h2 className={styles.name}>
                     香氛蠟燭 Candle
                     </h2>
                     <p className={styles.description}>
                        When lit, it releases a rich floral scent with medium intensity.
                     </p>
                     <div className={styles.more}>
                     </div>
                  </div>
               </div>
            </div>

            <HotListR />

            <div className={styles.Row}>
               <div  className={styles.item}>
                  <div data-aos="fade-right" className={styles.img}>
                     <Link to={`/products/id/WIpGqa4dkc9GR80o4t2s`}>
                        <img
                           className={styles.img_width}
                           src="/images/spray1.webp"
                           alt="product3" />
                        <div className={styles.overlay}>
                           <div className={styles.text}>空間噴霧 Spray</div>
                        </div>
                     </Link>
                  </div>

                  <div className={styles.info}>
                     <h3 className={styles.category}>
                        Spray
                     </h3>
                     <h2 className={styles.name}>
                        空間噴霧 Spray
                     </h2>
                     <p className={styles.description}>
                        When lit, it releases a rich floral scent with medium intensity.
                     </p>
                     <div className={styles.more}>
                     </div>
                  </div>
               </div>
            </div>
         </Col>
      </div>

   );
}