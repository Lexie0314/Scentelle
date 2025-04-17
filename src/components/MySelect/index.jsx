import React, { useState, useEffect } from 'react';
import styles from './myselect.module.css';
import { Row, Col, Select } from 'antd';
import { NavLink } from 'react-router-dom';
import ProductList from '../ProductList';

export default function MySelect({ products, isLoading }) {
  const ProductSorting = ['商品排序', '價錢高到低', '價錢低到高'];
  const [selectedSorting, setSelectedSorting] = useState(null);
  const [sortedProducts, setSortedProducts] = useState(products); // 新增 sortedProducts 狀態

  useEffect(() => {
    if (selectedSorting === '價錢高到低') {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setSortedProducts(sorted);
      console.log(sorted)
    } else if (selectedSorting === '價錢低到高') {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setSortedProducts(sorted);
      console.log(sorted)
    } else {
      setSortedProducts(products);
    }
  }, [selectedSorting, products]);

  const handleSortingChange = (value) => {
    setSelectedSorting(value);
  };

  return (
    <div className={styles.container}>
      <Col justify="center">
        <Row gutter={[24, 24]} justify="end" className={styles.logobox}>
          <Select
            placeholder="商品排序"
            className={styles.Selectstyle}
            onChange={handleSortingChange}
            value={selectedSorting}
          >
            {ProductSorting.map((sorting, index) => (
              <Select.Option key={index} value={sorting}>
                {sorting}
              </Select.Option>
            ))}
          </Select>
          <ProductList products={sortedProducts} isLoading={isLoading} />
        </Row>
      </Col>
    </div>
  );
}