import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtocart.module.css"

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: '已加入購物車',
      description:
        `${qty}件${product.name} 已加入購物車.`,
      placement: 'bottomRight',
      icon:(<img src="/shortcut icon.png" alt="logo" />)
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
  };

  return (
    <Button type="primary" className={styles.btn} onClick={addToCart}>
      {/* <img className={styles.image} src="/images/basket.svg" /> */}
      加入購物車
    </Button>
  );
}