
import { Row, Col, Skeleton } from "antd";
import ProductItem from "../ProductItem";
import styles from './productlist.module.css';

export default function ProductList({ products, isLoading }) {
  return (
    <div className="container">
      <Col align="middle">
        <Row gutter={[24, 24]} className={styles.imagebox}>
          {products.map(product => (
            <Col
              key={product.id}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
            >
              {isLoading ? <Skeleton.Image active /> : null}
              <Skeleton loading={isLoading} paragraph={{ rows: 1 }} active />
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
}
