import styles from './footer.module.css';
import { Row, Col } from "antd";
export default function Footer() {

    return (
        <div>
            <hr className={styles.hrFooterLine} />
            <footer className={styles.footer}>
                <div className="container">
                    <Row className={styles.box}>
                        <Col span={24} lg={{ span: 15 }}>
                            <div className={styles.content}>
                                <img className={styles.img} src="/images/logo.png" alt="logo" />
                                <div className={styles.text}>
                                    <p className={styles.title}>Contact us</p>
                                    Tel：02-00000000<br />
                                    E-MAIL：123@gmail.com<br />
                                    Address：Taipei, Taiwan
                                </div>

                            </div>

                        </Col>
                        <Col span={24} lg={{ span: 4 }}>
                            
                        </Col>
                        <Col span={24} lg={{ span: 4 }}>
                        <div className={styles.followUS}>
                                <p className={styles.title}>Follow us</p>
                                <div className={styles.iconsArea}>
                                    <a href="#">
                                        <img className={styles.icon} src="/images/ig.png" alt="instagram" />
                                    </a>
                                    <a href="#">
                                        <img className={styles.icon} src="/images/fb.png" alt="facebook" />
                                    </a>
                                    
                                </div>
                            </div>
                        </Col>
                        <p className={styles.copyRight}>
                            Copyright © 2025 Scentelle. All rights reserved.
                        </p>
                    </Row>
                </div>
            </footer>
        </div>

    );
}