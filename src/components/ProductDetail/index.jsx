import React from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Row, Col, Select, Carousel, Skeleton } from "antd";
import { useSearchParams } from 'react-router-dom';
import AddToCart from '../AddToCArt';
import styles from "./productdetail.module.css"
import Slider from "react-slick";
import { useProducts } from '../../react-query';


const { Option } = Select;
const carouselEL = React.createRef()

function ProductDetail({ product, isLoading }) {
   // const { data, isLoading } = useProducts();
   // const products = data || [];
   const [searchParams] = useSearchParams();
   const qtyFromBasket = searchParams.get('qtyFromBasket');
   const initQty = qtyFromBasket !== undefined && qtyFromBasket !== null
      ? Number(qtyFromBasket)
      : product.countInStock > 0
         ? 1
         : 0;
   const [qty, setQty] = useState(initQty);

   const onChange = (currentSlide) => {
      console.log(currentSlide);
   };

   const contentStyle = {
      width: '100vw',
      height: '100vh',
      color: '#fff',
      lineHeight: '80vh',
      textAlign: 'center',
      background: '#364d79',
      marginLeft: "50%",
      transform: 'translateX(-50%)',
      cursor: 'pointer',
   };

   useEffect(() => {
      setQty(initQty);
   }, []);
   return (

      <div className="container">

         <Col style={{ width: "100%", margin: "auto", marginTop: "12rem" }} justify="center" >
            <Row gutter={[32, 32]}
               style={{ width: "100%", margin: "auto", paddingBottom: "2.5rem" }} justify="space-between" align="middle"
            >
               <Col
                  xs={{ span: 24 }}
                  lg={{ span: 13 }}
                  justify="space-between" align="middle"
               >
                  {/* <img
                     alt={product.name}
                     className={styles.image}
                     src={product.image}
                  /> */}

<div className={styles.carouselWrapper}>
  <Button
    className={`${styles.btnstyle} ${styles.leftBtn}`}
    onClick={() => {
      carouselEL.current.prev();
    }}
    icon={<LeftOutlined />}
  />

  <Carousel ref={carouselEL} afterChange={onChange}>
    <div>
      {isLoading ? <Skeleton.Image active block /> : null}
      <img
        alt={product.name}
        className={styles.image}
        src={product.img1}
      />
    </div>
    <div>
      <img
        alt={product.name}
        className={styles.image}
        src={product.img2}
      />
    </div>
  </Carousel>

  <Button
    className={`${styles.btnstyle} ${styles.rightBtn}`}
    onClick={() => {
      carouselEL.current.next();
    }}
    icon={<RightOutlined />}
  />
</div>



               </Col>
               <Col
                  xs={{ span: 24 }}
                  lg={{ span: 11 }}
               >
                  <Skeleton loading={isLoading} active >
                  <div className={styles.info} >
                     
                     <h2 className={styles.category} >
                        {product.category}
                     </h2>
                     <h1 className={styles.name} >
                        {product.name}
                     </h1>
                     <p className={styles.description}>
                        {product.description_long}
                     </p>
                     <div className={styles.wrap}>
                        <div className="textbox">
                           
                           <p className={styles.price} >
                              {product.Vegan}
                           </p>
                           <p className={styles.text}>價格</p>
                           <p className={styles.price} >
                              NT$&nbsp;{product.price}
                           </p>
                        </div>
                        
                        <div className={styles.select}>
                           <p className={styles.text}>數量 {"   "}</p>
                           <Select
                              defaultValue={initQty}
                              key={initQty}
                              className={styles.selectStyle}
                              onChange={val => setQty(val)}
                           >
                              {[...Array(product.countInStock).keys()].map((x) => (
                                 <Option key={x + 1} value={x + 1}>
                                    {x + 1}
                                 </Option>
                              ))}
                           </Select>
                        </div>
                       
                        <Row justify="space-between" align="middle" style={{ marginTop: "1rem" }}>
                           <AddToCart product={product} qty={qty} />
                        </Row>
                     </div>
                  </div>
                  </Skeleton>
               </Col>
            </Row>
            <h1 className={styles.title} >
               商&nbsp;品&nbsp;介&nbsp;紹
            </h1>
            <Row gutter={[32, 32]}
               style={{ width: "100%", margin: "auto", }} justify="space-between" align="middle"
            >
               <div className={styles.box}>
                  <Col
                     xs={{ span: 24 }}
                     lg={{ span: 13 }}
                  // justify="space-between" align="middle"
                  >
                     <div className={styles.info} >

                        <h1 className={styles.description_name} >
                           {product.name}
                        </h1>
                        <p className={styles.description}>
                           {product.description}
                        </p>

                     </div>
                  </Col>
                  <Col
                     xs={{ span: 24 }}
                     lg={{ span: 11 }}
                     justify="center" align="middle"
                  >
                     <img
                        alt={product.name}
                        className={styles.image2}
                        src={product.img2}
                     />
                  </Col>

               </div>
            </Row>

            <Row
               gutter={[32, 32]}
               style={{ width: "100%", margin: "auto", }} justify="space-between" align="middle"
            >
               <Col
                  xs={{ span: 24 }}
                  lg={{ span: 14 }}
               >
                  
               </Col>
            </Row>
            <Row
               gutter={[32, 32]}
               style={{ width: "100%", margin: "auto", }} justify="space-between" align="middle"
            >
               <Col
                  xs={{ span: 24 }}
                  lg={{ span: 24 }}
               >
                  
               </Col>
            </Row>

         </Col>

      </div>

   );
}

export default ProductDetail;