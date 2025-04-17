
import styles from './brandlist.module.css';
import { Row, Col } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

export default function BrandList() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="container">
            <Row>
                <Col className={styles.col}>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <div data-aos="fade-right" className={styles.img}>
                                <Link to={`https://www.greenvbakery.com/`}>
                                    <img
                                        className={styles.img_width}
                                        src="/images/p1.webp"
                                        alt="綠帶純植物烘培"
                                    />

                                </Link>
                            </div>

                            <div className={styles.info}>
                                <h2 className={styles.name}>
                                    綠帶純植物烘培
                                </h2>
                                <p className={styles.description}>
                                    甜點主廚 Isabella 因為看到市面上販售的食物，有太多傷害人體的添加物，希望家人與親友健康，開始關心食材，發現市場上素的料理已經很成熟，純素的甜點卻沒有能兼顧美觀與美味的選擇，因此投入純素食糕點的創新。
                                    綠帶純植物烘焙 GREEN BAKERY所有的糕點，皆選用最純淨健康的材料製作，無添加蛋奶、不使用氫化植物鮮奶油、香精、色素、防腐劑以及含鋁泡打粉。
                                </p>
                                <div className={styles.more}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.Row}>
                        <div className={styles.item}>
                            <div data-aos="fade-right" className={styles.img}>
                                <Link to={`https://www.vegandaohe.com.tw/`}>
                                    <img
                                        className={styles.img_width}
                                        src="/images/Brand_yi.png"
                                        alt="一禾堂"
                                    />

                                </Link>
                            </div>

                            <div className={styles.info}>
                                <h2 className={styles.name}>
                                    一禾堂
                                </h2>
                                <p className={styles.description}>
                                    「荷」草、人、可。
                                    草，植物。人，你我他。可，應許。
                                    許下以植物生活的人，以植物生活許下的人。
                                    「心」
                                    當環境學家告訴我們：
                                    世界上有45%近一半的可用陸地，全用來支持畜牧產品時，
                                    我們知道，該是用一只綠色的餐盤，光復世界土地的時刻。
                                </p>
                                <div className={styles.more}>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.Row}>
                        <div className={styles.item}>
                            <div data-aos="fade-right" className={styles.img}>
                                <Link to={`https://www.vegehip.com/`}>
                                    <img
                                        className={styles.img_width}
                                        src="/images/Brand_hp.png"
                                        alt="嬉皮烘培" />
                                </Link>
                            </div>

                            <div className={styles.info}>
                                <h2 className={styles.name}>
                                    嬉皮烘培
                                </h2>
                                <p className={styles.description}>
                                    一間友善動物的獨立純素麵包店
                                    全店產品皆為純素，不使用雞蛋、牛奶等動物相關成分
                                    店面提供老麵麵包・蛋糕・植物性飲品等產品
                                    用美味打破葷素的邊界，
                                    透過吃，改變這個世界對愛的定義。
                                </p>
                                <div className={styles.more}>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    );
}
