import styles from './logo.module.css';
import { Row, Col } from "antd";
import { NavLink } from 'react-router-dom';

export default function Logo() {

  return (
    <div className={styles.container}>
      <Col  align="middle" justify="center">
        <Row gutter={[24, 24]} align="middle" justify="center" className={styles.logobox}>
          <div className={styles.logo}>       
            <NavLink to="/store/store">
              <img src="/images/p1.webp" alt="icon-1" className={styles.logo_img} />
            </NavLink>
            <NavLink to="/store3/yiihotang">
              <img src="/images/y1.webp" alt="icon-2" className={styles.logo_img} />
            </NavLink>
            <NavLink to="/store2/hippun">
              <img src="/images/h1.webp" alt="icon-3" className={styles.logo_img} />
            </NavLink>
          </div>
        </Row>
      </Col>
    </div>
  );
}