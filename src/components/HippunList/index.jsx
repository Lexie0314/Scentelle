import { Row, Col } from "antd";
import HippunItem from "../HippunItem";
import styles from './hippunlist.module.css';

export default function HippunList({ hippun }) {
  return (
    <div className="container">
      <Col align="middle">
      <Row gutter={[24,24]} className={styles.imagebox}>
        {hippun.map(hippun => (
          <Col 
            key={hippun.id}
            sm={{ span: 12}}//2 screen ≥ 576px
            xs={{ span: 24 }}//1 screen < 576px
            md={{ span: 8 }}//3 screen ≥ 768px
            lg={{span:6}} //4 screen ≥ 992px
          >
            <HippunItem hippun={hippun} />
          </Col>
        ))}
      </Row>
    </Col>
    </div>
  );
}