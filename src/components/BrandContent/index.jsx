import React, { useState } from "react";
import "antd/dist/antd";
import styles from "./brandcontent.module.css";
import { Row, Col, Carousel, Button } from "antd";
import BrandList from "../BrandList";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function BrandContent({ title }) {
    const [active, setActive] = useState(false);

    const typingContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
            },
        },
    };

    const typingText = {
        hidden: { opacity: 0, y: "20px" },
        show: {
            opacity: 1,
            y: "0",
            transition: {
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className={styles.content}>
            <div className="container">
                <Row className={styles.RowCol}>
                    <Col className={styles.RowCol}>
                        <div className={styles.boxstyle}>
                            <img
                                className={styles.ns}
                                src="/images/login_logo.png"
                                alt="news1" />
                            <p className={styles.description}>
                                「偶素甜點」集結了多間知名素甜點店，作為整合通路商，為素食者打造專屬的甜點天地 ，我們與多個品牌合作，進行整合與分類以素別、
                                種類、品牌等多面向切入，打造出素食新意象，精緻化的同時拉近大家與素食的距離。
                            </p>

                        </div>

                    </Col>
                </Row>
            </div>

            <h2 className={styles.title}>{title}</h2>
            <div className={styles.List}> 
                <BrandList />
            </div>
            
        </div>
    );
}