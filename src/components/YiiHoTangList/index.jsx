import { Row, Col } from "antd";
import YiiHoTangItem from "../YiiHoTangItem";
import styles from './yiihotanglist.module.css';

export default function YiiHoTangList({ yiihotang, isLoading }) {
  return (
    <div className="container">
      <Col align="middle">
      <Row gutter={[24,24]} className={styles.imagebox}>
        {yiihotang.map(yiihotang => (
          <Col 
            key={yiihotang.id}
            sm={{ span: 12}}//2 screen ≥ 576px
            xs={{ span: 24 }}//1 screen < 576px
            md={{ span: 8 }}//3 screen ≥ 768px
            lg={{span:6}} //4 screen ≥ 992px
          >
            <YiiHoTangItem yiihotang={yiihotang} />
          </Col>
        ))}
      </Row>
    </Col>
    </div>
  );
}
